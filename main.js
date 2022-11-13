nose_x = 0;
nose_y = 0;

function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotResult);

}


function preload(){
    Tiara =loadImage("https://i.postimg.cc/nc9QfL6w/C-113-1.png");
}

function modelloaded(){
    console.log( "poseNet is Intialised ");
}

function gotResult(result){
    if(result.length>0){
        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        console.log("nose x = " + nose_x+" nose y = " + nose_y);
    }
}

function draw(){
    image(video, 0, 0, 400, 350);
    image(Tiara, nose_x-70, nose_y-150, 155, 100);
    
}


function take_snapshot(){
    save('C-114.png');
}