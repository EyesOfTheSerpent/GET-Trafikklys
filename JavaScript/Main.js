"use strict";
//Start

let toggler = false;

class Main{

    changeLight(colorR, colorY, colorG){
        let redLight = document.getElementById("redCircle");
        let yellowLight = document.getElementById("yellowCircle");
        let greenLight = document.getElementById("greenCircle");
        redLight.style.backgroundColor = String(colorR);
        yellowLight.style.backgroundColor = String(colorY);
        greenLight.style.backgroundColor = String(colorG);
    }

    async autoLight(){
        this.changeLight('#b71b1b', '', '');
        //setTimeout(this.changeToRed, 1000);
        await delay(1000);
        this.changeToRed();
    }

    async changeToRed(){
        this.changeLight('#b71b1b', '', '');
        //setTimeout(this.changeToYellow,3000);
        await delay(3000);
        this.changeToYellow();

    }
    
    async changeToYellow(){
        if(toggler == false){
            this.changeLight('#b71b1b', '#cdcd1f', '');
            await delay(3000);
            this.changeToGreen();
            //setTimeout(this.changeToGreen, 3000);
            toggler = true;
        }else{
            this.changeLight('', '#cdcd1f', '');
            await delay(3000);
            this.changeToRed();
            //setTimeout(this.changeToRed, 3000);
            toggler = false;
        }
    }
    
    async changeToGreen(){
        this.changeLight('', '', '#34cd1f');
        await delay(3000);
        this.changeToYellow();
        //setTimeout(this.changeToYellow, 3000);
    }
    
    stopLight(){
        location.reload();
    }
}

let light = new Main();

function delay(delayInMs) {
    return new Promise((resolve) => setTimeout(resolve, delayInMs));
}

//End