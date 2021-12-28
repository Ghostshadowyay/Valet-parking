canvas =document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var car_width = 100;
var car_height= 90;
background_image= "parkinglot.png"
car_image = "greencar.png";
car_x = 10;
car_y = 10;





function uploadrover() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height); 
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed=='37'){
        left();
        console.log("left");
    }
    if (keypressed=='38'){
        up();
        console.log("up");
    }
    if (keypressed=='39'){
        right();
        console.log("right");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
}
function left() {
    if(car_x>=0) {
        car_x=car_x-10;
        console.log("when left arrow is pressed x="+car_x+" y="+car_y);
        uploadrover();
    }
}
function right() {
    if(car_x<=700) {
        car_x=car_x+10;
        console.log("when right arrow is pressed x="+car_x+" y="+car_y);
        uploadrover();
    }
}
function up() {
    if(car_y>=0) {
        car_y=car_y-10;
        console.log("when up arrow is pressed x="+car_x+" y="+car_y);
        uploadrover();
    }
}
function down() {
    if(car_y<=10) {
        car_y=car_y+10;
        console.log("when down arrow is pressed x="+car_x+" y="+car_y);
        uploadrover();
    }
}