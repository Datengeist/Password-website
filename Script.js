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

function encrypt(password, seed) {
    var result = '';
    for (var i = 0; i < password.length; i++) {
        var ascii = password.charCodeAt(i);
        if (ascii >= 32 && ascii <= 126) {
            result += String.fromCharCode((ascii - 32 + seed) % 95 + 32);
        } else {
            result += password.charAt(i);
        }
    }
    return result;
}

function decrypt(password, seed) {
    return encrypt(password, 95 - (seed % 95));
}

function generatePassword(laenge) {
    var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCases = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var specialLetters = '!@#$%^&*()';
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
    document.getElementById('generatePassword').innerText = 'Password: ' + password;
    document.getElementById('generateSeed').innerText = 'Seed: ' + seed;
    document.getElementById('generateEncrypted').innerText = 'Encrypted: ' + encrypt(password, seed);
    console.log('Passwort: ' + password + '\tSeed: ' + seed + '\tEncrypted: ' + encrypt(password, seed) + '\nDecrypted: ' + decrypt(encrypt(password, seed), seed))
}

function encryptButton(){
    var password = document.getElementById('encryptPassword').value;
    if(document.getElementById('encryptSeed').value == ''){
        var seed = generateSeed();
        document.getElementById('encryptSeed').value = seed;
    }else{
        var seed = parseInt(document.getElementById('encryptSeed').value);
    }
    document.getElementById('encryptEncrypted').innerText = 'Encrypted: ' + encrypt(password, seed);
    console.log('Passwort: ' + password + '\tSeed: ' + seed + '\tEncrypted: ' + encrypt(password, seed) + '\nDecrypted: ' + decrypt(encrypt(password, seed), seed))

}

function decryptButton(){
    var password = document.getElementById('decryptPassword').value;
    if(document.getElementById('decryptSeed').value == ''){
        var seed = generateSeed();
    }else{
        var seed = parseInt(document.getElementById('decryptSeed').value);
    }
    document.getElementById('decryptEncrypted').innerText = 'Decrypted: ' + decrypt(password, seed);
    console.log('Passwort: ' + password + '\tSeed: ' + seed + '\tDecrypted: ' + decrypt(password, seed) + '\nEncrypted: ' + encrypt(decrypt(password, seed), seed))

}