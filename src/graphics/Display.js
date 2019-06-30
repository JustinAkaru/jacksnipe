/**
 * A Display is an object that creates a HTMLCanvasContext and CanvasRenderingContext2D
 * @author jleeson
 */
export class Display {

    constructor() {
        /**
         * @type {HTMLCanvasElement}
         */
        this.canvas = document.createElement("canvas");
        this.canvas.id = "Jacksnipe-Canvas";
        /**
         * @type {Number}
         */
        this.width = width;
        /**
         * @type {Number}
         */
        this.height = height;
    }

    /**
     * creates an HTMLCanvasElement and adds a CanvasRenderingContext2D to the display
     * @param {Number} width - width of the display
     * @param {Number} height - height of the display
     */
    makeDisplay(width, height) {
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
        window.ctx = this.canvas.getContext("2d");
    }

    /**
     * adds a display to the page
     * @param {Display} display - display to add to the page
     */
    static useDisplay(display) {
        document.body.appendChild(display.canvas);
    }

    /** 
     * resizes the display
     * @param {Number} width - new width of the display
     * @param {Number} height -  new height of the display
     */
    resizeDisplay(width, height) {
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
    }

    /** clears the display */
    clearDisplay() {
        ctx.clearRect(0, 0, this.width, this.height);
    }


}