# Cam AI

Webcam Videostream Playground utilizing AI

* Frontend
  * NextJS + React
    * Storybook.JS for component playground
    * v0 for UI templating via Gen AI
* Backend
  * Python FastAPI & Uvicorn
    * opencv
      * consumes webcam video stream
      * segments it, remove background, keep only foreground
      * blends in background images and other assets
      * returns video stream to front end
    * Imagen
    * Gemini
    * ...?
