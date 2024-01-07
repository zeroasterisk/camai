from typing import Union

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse

app = FastAPI()


@app.get("/")
async def root(request: Request):
    return RedirectResponse(url="/static/index.html")

@app.get("/")
def hello():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

app.mount("/static", StaticFiles(directory="static"), name="static")