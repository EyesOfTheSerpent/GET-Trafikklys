//Start

let toggler = false;

function changeLight(colorR, colorY, colorG){
    let redLight = document.getElementById("redCircle");
    let yellowLight = document.getElementById("yellowCircle");
    let greenLight = document.getElementById("greenCircle");
    redLight.style.backgroundColor = String(colorR);
    yellowLight.style.backgroundColor = String(colorY);
    greenLight.style.backgroundColor = String(colorG);
}

function autoLight(){
    changeLight('#b71b1b', '', '');
    setTimeout(changeToRed, 1000)
}

function changeToRed(){
    changeLight('#b71b1b', '', '');
    setTimeout(changeToYellow,3000)
}

function changeToYellow(){
    if(toggler == false){
        changeLight('#b71b1b', '#cdcd1f', '');
        setTimeout(changeToGreen, 3000)
        toggler = true;
    }else{
        changeLight('', '#cdcd1f', '');
        setTimeout(changeToRed, 3000)
        toggler = false;
    }
}

function changeToGreen(){
    changeLight('', '', '#34cd1f');
    setTimeout(changeToYellow, 3000)
}

function stopLight(){
    location.reload();
}

//End