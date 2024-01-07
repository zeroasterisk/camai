
function capture_webcam() {
    // https://docs.opencv.org/4.x/dd/d00/tutorial_js_video_display.html
    let video = document.getElementById("videoInput"); // video is the id of video tag
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.log("An error occurred! " + err);
        });
}


window.onload = (event) => {
    console.log("page is fully loaded");
    capture_webcam();
};