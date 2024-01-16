// Get the input and output video elements
let webcamVideoInput = document.getElementById("videoInput");
let webcamVideoOutput = document.getElementById("videoOutput");


// Function to handle incoming video stream from WebSocket
function handleIncomingStream(event) {
    const videoBlob = new Blob([event.data], { type: 'video/webm' });
    const videoUrl = URL.createObjectURL(videoBlob);
    webcamVideoOutput.src = videoUrl;
}

// Function to initialize WebSocket connection
function initWebSocket() {
    const socket = new WebSocket("ws://localhost:8000/ws-cam");

    socket.onopen = () => console.log('WebSocket connection established');
    socket.onmessage = handleIncomingStream;
    socket.onerror = (event) => console.error('WebSocket error:', event);
    socket.onclose = () => console.log('WebSocket connection closed');

    return socket;
}

// Function to start capturing and streaming video
function startVideoCapture() {
    if (!webcamVideoInput || !webcamVideoOutput) {
        console.error('Error: Missing video input or output elements');
        return;
    }

    // Check if getUserMedia is supported
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        console.error('Error: getUserMedia not supported on this browser');
        return;
    }
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            console.log("MediaStream obtained.");

            webcamVideoInput.srcObject = stream;
            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
            const socket = initWebSocket();

            mediaRecorder.ondataavailable = (event) => {
                if (socket.readyState === WebSocket.OPEN) {
                    socket.send(event.data);
                }
            };

            mediaRecorder.onerror = (event) => console.error("MediaRecorder error:", event);
            mediaRecorder.start(100); // Time slice in ms
            console.log("MediaRecorder started.");
        })
        .catch(error => console.error('Error accessing webcam:', error));
}

startVideoCapture();
