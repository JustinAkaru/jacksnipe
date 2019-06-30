/**
 * an Actor is an object that contains information to render and object
 * @author jleeson
 */
export class Actor {

    /**
     * 
     * @param {HTMLImageElement} image
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
     */
    constructor(image, x, y, width, height) {
        /**
         * @type {HTMLImageElement}
         */
        this.image = image;
        /**
         * @type {Number}
         */
        this.x = x;
        /**
         * @type {Number}
         */
        this.y = y;
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
     * set the position of the actor
     * @param {Number} x - new actor x position
     * @param {Number} y - new actor y position
     */
    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * sets the size of the actor
     * @param {Number} width - new width of the actor
     * @param {Number} height - new height of the actor
     */
    resize(width, height) {
        this.width = width;
        this.height = height;
    }
}