function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(500, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 50, 50, 540, 380);
    circle(25, 25, 50);
    fill(255, 255, 0);
    stroke(255, 255, 0)
    circle(615, 25, 50);
    fill(255, 255, 0);
    stroke(255, 255, 0)
    circle(25, 455, 50);
    fill(255, 255, 0);
    stroke(255, 255, 0)
    circle(615, 455, 50);
    fill(255, 255, 0);
    stroke(255, 255, 0)
    
}
function take_snapshot(){
    save("photo.png");
}
