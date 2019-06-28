/**
 * creates a rect object
 * @param {Number} x - x position of the rect
 * @param {Number} y - y position of the rect
 * @param {Number} width - width of the rect
 * @param {Number} height - height of the rect
 * @return {Object}
 */
export function makeRect(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height,
        right: x + width,
        bottom: y + height,
    };
}

/**
 * checks if 2 rects are colliding
 * @param {Object} rect1 - first rectangle
 * @param {Object} rect2 - second rectangle
 * @return {Boolean}
 */
export function doRectsCollide(rect1, rect2) {
    return (rect1.x < rect2.right &&
        rect2.x < rect1.right &&
        rect1.y < rect2.bottom &&
        rect2.y < rect1.bottom);
}