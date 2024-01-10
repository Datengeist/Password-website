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
    var grossbuchstaben = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var kleinbuchstaben = 'abcdefghijklmnopqrstuvwxyz';
    var zahlen = '0123456789';
    var sonderzeichen = '!@#$%^&*()';
    var alleZeichen = grossbuchstaben + kleinbuchstaben + zahlen + sonderzeichen;

    var passwort = '';
    passwort += grossbuchstaben.charAt(Math.floor(Math.random() * grossbuchstaben.length));
    passwort += kleinbuchstaben.charAt(Math.floor(Math.random() * kleinbuchstaben.length));
    passwort += zahlen.charAt(Math.floor(Math.random() * zahlen.length));
    passwort += sonderzeichen.charAt(Math.floor(Math.random() * sonderzeichen.length));

    for (var i = 4; i < laenge; i++) {
        passwort += alleZeichen.charAt(Math.floor(Math.random() * alleZeichen.length));
    }

    passwort = passwort.split('').sort(function() { return 0.5 - Math.random() }).join('');

    return passwort;
}

function generateSeed(){
    return seed = Math.floor(Math.random() * 10000);
}

function generateButton(){
    var password = generatePassword((Math.random()*10) + 10);
    var seed = generateSeed();
    document.getElementById('generatePassword').innerHTML = 'Password: ' + password;
    document.getElementById('generateSeed').innerHTML = 'Seed: ' + seed;
    document.getElementById('generateEncrypted').innerHTML = 'Encrypted: ' + encrypt(password, seed);
}
