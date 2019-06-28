/**
 * create a display object and create a global context reference
 * @param {Number} width - the width of the display
 * @param {Number} height - the height of the display
 * @return {HTMLCanvasElement}
 */
export function makeDisplay(width, height) {
    let canvas = document.createElement("canvas");
    canvas.width = width || window.innerWidth;
    canvas.height = height || window.innerHeight;
    canvas.id = "jacksnipeCanvas";

    window.ctx = canvas.getContext("2d");

    return canvas;
}

/**
 * resizes the canvas element to a new width and height
 * @param {HTMLCanvasElement} canvas - the canvas to be resized
 * @param {Number} width - the new canvas width
 * @param {Number} height - the new canvas height
 */
export function resizeDisplay(display, width, height) {
    display.width = width;
    display.height = height;
}

/**
 * adds the canvas element to the document
 * @param {HTMLCanvasElement} canvas - canvas to be added to the document
 */
export function appendDisplay(display) {
    document.body.appendChild(display);
}