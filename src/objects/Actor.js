/**
 * creates an actor containing data to render with
 * @param {HTMLImageElement} image - the image to display
 * @param {Number} x - the actors's x position
 * @param {Number} y - the actors's y position
 * @param {Number} width - the with of the actor
 * @param {Number} height - the height of the actor
 * @return {Object}
 */
export function makeActor(image, x, y, width, height) {
    return { image: image, x: x, y: y, width: width, height: height };
}
/**
 * draws an actor using the currently bound context
 * @param {Object} actor - the  actor to render
 */
export function drawActor(actor) {
    ctx.drawImage(actor.image, actor.x, actor.y, actor.width, actor.height);
}