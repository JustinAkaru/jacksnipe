/**
 * Rect is an object to detect simple bounding box collision
 * @author jleeson
 */
export class Rect {

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height
     */
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * checks if 2 rects are colliding
     * @param {Rect} rect1 - first rect to check
     * @param {Rect} rect2 - second rect to check
     * @return {Boolean}
     */
    static doRectsCollide(rect1, rect2){
        return (rect1.x  < (rect2.x + rect2.width) &&
            rect2.x < (rect1.x + rect1.width) &&
            rect1.y < (rect2.y + rect2.height) &&
            rect2.y < (rect1.y + rect1.height));
    }

    /**
     * checks if coordinates are inside a rect
     * @param {Rect} rect - rect to check inside
     * @param {Number} x - x coord
     * @param {Number} y - y coord
     * @return {Boolean}
     */
    static areCoordsInside(rect, x, y){
        return (x >= rect.x &&
            x <= rect.right &&
            y >= rect.y &&
            y  <= rect.bottom);
    }
}