nose_x=0;
nose_y=0;
difference=0;
leftwrist_x=0;
rightwrist_x=0;

function setup(){
video=createCapture(VIDEO);
video.size(560,500);
canvas=createCanvas(560,500);
canvas.position(760,150);
video.position(150,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotResults);

}
function draw(){
    background('#00a8e8');
    fill("white");
    stroke("#003459");
    square(nose_x,nose_y,difference);
    document.getElementById("square_sides").innerHTML="width and height of square = "+difference;

}
function modelLoaded(){
    console.log("model loaded");
}
function gotResults(results){
    if(results.length>0){
console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log("nose x "+nose_x + " nose y "+nose_y);
leftwrist_x=results[0].pose.leftWrist.x;
rightwrist_x=results[0].pose.rightWrist.x;
difference=floor(leftwrist_x-rightwrist_x)
console.log("leftwrist_x = "+leftwrist_x +" rightwrist_x = "+rightwrist_x +" difference = " + difference);
    }}

