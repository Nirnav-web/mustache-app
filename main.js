noseX=0;
noseY=0;
function preload(){
mustach=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded())
    posenet.on('pose',gotPoses)  
}
function take_snapshot(){
    save('Myimage.png');
    
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-45;
        noseY=results[0].pose.nose.y;
        console.log(" nose x="+noseX);
        console.log(" nose y="+noseY);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(mustach,noseX,noseY,100,50);
    }