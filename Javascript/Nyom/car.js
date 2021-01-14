let carY = 200;
let vittu = 0;
let car = document.getElementById("car");
let KeyW = false;
let KeyD = false;
let carX = 100;

setInterval(yes, 1);

function yes(){
    car.style.top = carY + "px";
    car.style.left = carX + "px";
    car.style.transform = "rotate(" + vittu + "deg)";
    if(keyW == true){
        carY -= 1;
    }
    if(keyD == true){
        carX += 1;
    }
}
window.addEventListener('keydown', Wroom);

function Wroom(e){
    if(e.key == "w"){
      keyW = true;
    }
    if(e.key == "d"){
        keyD = true;
      }
}

window.addEventListener('keyup', Skrrt);

function Skrrt(e){
    if(e.key == "w"){
      keyW = false;
    }
    if(e.key == "d"){
        keyD = false;
      }
}