


function debug_websocket() {
    // https://fastapi.tiangolo.com/advanced/websockets/?h=websocket
    let form = document.getElementById("debugWebsocketForm"); // video is the id of video tag
    if (!form) {
        console.log('abort: debug_websocket, no #debugWebsocketForm');
        return;
    }
    console.log('trigger: debugWebsocketForm', form);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        var input = document.getElementById("messageText");
        console.log('ws:>>', input.value);
        ws.send(input.value);
        input.value = '';
    });

    var ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = function (event) {
        console.log('ws:<<', event.data);
        var messages = document.getElementById('messages')
        var message = document.createElement('div')
        message.className = "block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        var content = document.createTextNode(event.data)
        message.appendChild(content)
        messages.appendChild(message)
    };
}


window.onload = (event) => {
    console.log("page is fully loaded");
    // debug_websocket();
};