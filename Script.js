function generateRandomNumbers(seed, laenge) {
    var randomNumbers = [];
    var x = seed;
    for (var i = 0; i < laenge; i++) {
        x = (x * 16807) % 2147483647;  // Dies ist ein einfacher linearer Kongruenzgenerator
        randomNumbers.push(x % 95);  // Modulo 95, um eine Zahl zwischen 0 und 94 zu erhalten
    }
    return randomNumbers;
}


function openTab(tabId, element) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button-active");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("-active", "");
    }
    document.getElementById(tabId).style.display = "block";
    element.className += "-active";
}

function focusFunction(id) {
    document.getElementById(id).classList.add('active');
}

function blurFunction(id) {
    document.getElementById(id).classList.remove('active');
}

function encrypt(password, seed) {
    var randomNumbers = generateRandomNumbers(seed, password.length);
    var result = '';
    for (var i = 0; i < password.length; i++) {
        var ascii = password[i].charCodeAt();
        if (ascii >= 32 && ascii <= 126) {
            result += String.fromCharCode((ascii - 32 + randomNumbers[i]) % 95 + 32);
        } else {
            result += password[i].charAt();
        }
    }
    return result;
}

function decrypt(password, seed) {
    var randomNumbers = generateRandomNumbers(seed, password.length);
    var result = '';
    for (var i = 0; i < password.length; i++) {
        var ascii = password[i].charCodeAt();
        if (ascii >= 32 && ascii <= 126) {
            result += String.fromCharCode((ascii - 32 + 95 - randomNumbers[i]) % 95 + 32);
        } else {
            result += password[i].charAt();
        }
    }
    return result;
}

function generatePassword(laenge) {
    var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCases = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var specialLetters = '!@#$%^&*()-_/';
    var allLetters = capitalLetters + lowerCases + numbers + specialLetters;

    var password = '';
    password += capitalLetters.charAt(Math.floor(Math.random() * capitalLetters.length));
    password += lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialLetters.charAt(Math.floor(Math.random() * specialLetters.length));

    for (var i = 4; i < laenge; i++) {
        password += allLetters.charAt(Math.floor(Math.random() * allLetters.length));
    }

    password = password.split('').sort(function() { return 0.5 - Math.random() }).join('');

    return password;
}

function generateSeed(){
    return seed = Math.floor(Math.random() * 10000);
}

function generateButton(){
    var password = generatePassword((Math.random()*10) + 10);
    var seed = generateSeed();
    document.getElementById('generatePassword').value = password;
    document.getElementById('generateSeed').value = seed;
    document.getElementById('generateEncrypted').value = encrypt(password, seed);
    
}

function encryptButton(){
    var password = document.getElementById('encryptPassword').value;
    if(document.getElementById('encryptSeed').value == ''){
        var seed = generateSeed();
        document.getElementById('encryptSeed').value = seed;
    }else{
        var seed = parseInt(document.getElementById('encryptSeed').value);
    }
    document.getElementById('encryptEncrypted').value = encrypt(password, seed);
    
}

function decryptButton(){
    var password = document.getElementById('decryptPassword').value;
    if(document.getElementById('decryptSeed').value == ''){
        var seed = generateSeed();
    }else{
        var seed = parseInt(document.getElementById('decryptSeed').value);
    }
    document.getElementById('decryptDecrypted').value = decrypt(password, seed);
    
}