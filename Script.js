let x

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

function getRandom(seed){
    if(x==null){
        GenerateInts(seed);
    }
    x *= 10;
    let y = Math.floor(x);
    x -= Math.floor(x); 
    return y-5;
}

function GenerateInts(seed) {
    x = Math.sin(seed++) * 10000;
    x = x - Math.floor(x);
}