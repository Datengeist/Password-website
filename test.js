var x
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

function encrypt(password, seed){
    x = null;
    let neu = "";
    for(let i = 0; i< password.length; i++){
        
        let foo = getRandom(seed);

        if(password[i].charCodeAt() + foo > 126){
            neu += String.fromCharCode((password[i].charCodeAt() + foo) - 94);
        }else if(password[i].charCodeAt() + foo < 33){
            neu += String.fromCharCode((password[i].charCodeAt() + foo) + 94);
        }else{
            neu += String.fromCharCode(password[i].charCodeAt() + foo);
        }
    }
    console.log(neu)
    return neu;
}

function decrypt(password, seed){
    x = null;
    let neu = "";
    for(let i = 0; i< password.length; i++){
        
        let foo = -getRandom(seed);
        
        //console.log(foo)
        if(password[i].charCodeAt() + foo > 126){
            neu += String.fromCharCode((password[i].charCodeAt() + foo) - 94);
        }else if(password[i].charCodeAt() + foo < 33){
            neu += String.fromCharCode((password[i].charCodeAt() + foo) + 94);
        }else{
            neu += String.fromCharCode(password[i].charCodeAt() + foo);
        }
        
    }
    return neu;
}


