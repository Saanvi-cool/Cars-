canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;

rover_image = "http://www.clker.com/cliparts/u/X/H/5/K/K/red-car-top-view-md.png";
pixArray=["https://i.postimg.cc/bv5d35nK/racing.jpg"];
rand=Math.floor(Math.random()*4);
background_image = pixArray[rand];
function add() {

    background_image_object = new Image();
    background_image_object.onload = uploadBackground;
    background_image_object.src = background_image;

    rover_image_object = new Image();
    rover_image_object.onload = rover;
    rover_image_object.src = rover_image;

}

function uploadBackground() {
    pen.drawImage(background_image_object, 0, 0, canvas.width, canvas.height);
}

function rover(){
    pen.drawImage(rover_image_object, rover_x,rover_y, rover_width,rover_height);
}
window.addEventListener("keydown",iLostMyKeys);

function iLostMyKeys(e){
keyPress=e.keyCode;
console.log(keyPress);
if(keyPress=='37'){
    console.log("left arrow key pressed");
    Left();
}
if(keyPress=='38'){
    console.log("up arrow key pressed");
    Up();
}
if(keyPress=='39'){
    console.log("right arrow key pressed");
    Right();
}
if(keyPress=='40'){
    console.log("down arrow key pressed");
    Down();
}
}
function Up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        rover();
        console.log ("when up pressed x="+rover_x+" and y="+rover_y);
    }
}
function Down(){
    if(rover_y<=canvas.height-rover_height){
        rover_y=rover_y+10;
        uploadBackground();
        rover();
        console.log ("when down pressed x="+rover_x+" and y="+rover_y);
    }
}
function Right(){
    if(rover_x<=canvas.width-rover_width){
      rover_x=rover_x+10;
      uploadBackground();
      rover();
      console.log ("when right pressed x="+rover_x+" and y="+rover_y);
    }
}
function Left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        rover();
        console.log ("when left pressed x="+rover_x+" and y="+rover_y);
    }
}