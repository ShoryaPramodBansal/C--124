function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(10,50);

    canvas = createCanvas(400, 400);
    canvas.position (430, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized and Loaded!');
}

function gotPoses(results)
{
    if(results.length > 0)
 {
    console.log(results);

    console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwrist_y "+results[0].pose.rightWrist.y);
    console.log("leftwrist_x = "+results[0].pose.leftWrist.x+" leftwrist_y "+results[0].pose.leftWrist.y);

 }
}