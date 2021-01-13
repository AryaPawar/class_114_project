lipX=0;
lipY=0;
function preload(){
    lip=loadImage('https://i.postimg.cc/sfKJ2zw0/lip-2.png');
}
function setup(){
    canvas= createCanvas(300, 300); 
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);

}

function modelLoaded(){
    console.log('poseNet Is Intialized');
}

function gotPosses(results){
    if(results.length>0){
            console.log(results);
            lipX= results[0].pose.nose.x-10;
            lipY=results[0].pose.nose.y+10;
            console.log("lip x=" + results[0].pose.nose.x);
            console.log("lip y=" + results[0].pose.nose.y);

    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lip, lipX, lipY, 30, 30);
}


function take_snapshot(){
    save('myFilterImage.png');
}
