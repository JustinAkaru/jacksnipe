/**
 * Camera manages a viewport for the canvas, and changes the view of objects
 */
export class Camera {

    constructor() {
        /** @type {{x: Number, y: Number}} */
        this.position = { x: 0, y: 0 };
        /** @type {{x: Number, y: Number}} */
        this.scale = { x: 1, y: 1 };
        /** @type {Number} */
        this.left = 0;
        /** @type {Number} */
        this.top = 0;
        /** @type {Number} */
        this.right = 0;
        /** @type {Number} */
        this.bottom = 0;
        /** @type {Number} */
        this.width = 0;
        /** @type {Number} */
        this.height = 0;
        /** @type {Number} */
        this.distance = 1000;
        /** @type {Number} */
        this.fov = Math.PI / 4;
        /** @type {Number} */
        this.aspectRatio = 0;

        this.updateCamera();
    }

    /** start camera calculations */
    startCamera() {
        ctx.save();
        this.applyScale();
        this.applyTranslation();
    }

    /** stop camera calculatioins */
    stopCamera() {
        this.ctx.restore();
    }

    /** 
     * apply camera scale
     * @private
     */
    applyScale() {
        ctx.scale(this.scale.x, this.scale.y);
    }

    /** 
     * apply camera translation 
     * @private
     */
    applyTranslation() {
        ctx.translate(-this.left, -this.top);
    }

    /** update the camera */
    updateCamera() {
        this.aspectRatio = canvas.width / canvas.height;
        this.width = this.distance * Math.tan(this.fov);
        this.height = this.width / this.aspectRatio;
        this.left = this.position.x - (this.width / 2.0);
        this.top = this.position.y - (this.height / 2.0);
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
        this.scale.x = canvas.width / this.width;
        this.scale.y = canvas.height / this.height;
    }

    /**
     * set the zoom distance
     * @param {Number} distance - distance from ground
     */
    setZoomLevel(distance) {
        this.distance = distance;
        this.updateCamera();
    }

    /**
     * move the camera location
     * @param {Number} x - new x locatoin
     * @param {Number} y - new y locatoin
     */
    moveTo(x, y) {
        this.position.x = x;
        this.position.y = y;
        this.updateCamera();
    }
}