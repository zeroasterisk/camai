import cv2 as cv
import numpy as np
from typing import Union

from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse

import asyncio

app = FastAPI()

video_data = bytearray()


@app.get("/")
async def root(request: Request):
    return RedirectResponse(url="/static/index.html")


@app.get("/hello")
def hello():
    return {"Hello": "World"}


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"echo: {data}")


@app.websocket("/ws-cam")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        try:
            # Read a video frame from the WebSocket
            data = await websocket.receive_bytes()
            nparr = np.frombuffer(data, np.uint8)
            frame = cv.imdecode(nparr, cv.IMREAD_COLOR)

            chunk = await websocket.receive_bytes()
            video_data.extend(chunk)

            # Process the frame (if needed)
            # For example, you might apply some OpenCV operations here

            # Encode the frame and send it back
            _, buffer = cv.imencode(".jpg", frame)
            await websocket.send_bytes(buffer.tobytes())
        except WebSocketDisconnect:
            print("Client disconnected")
        except Exception as e:
            print(f"Error: {e}")
            break


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/img", StaticFiles(directory="static/img"), name="static")
