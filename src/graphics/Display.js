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

    return canvas;
}

/**
 * creates a 2d context and makes it the active context.
 * @param {HTMLCanvasElement} display - the display to make a 2d context active for
 */
export function make2DContextCurrent(display){
    window.ctx = display.getContext("2d");
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

/**
 * clears the display using the currently active graphics context
 * @param {HTMLCanvasElement} display - the display to clear
 */
export function clearDisplay(display){
    ctx.clearRect(0,0,display.width,display.height);
}