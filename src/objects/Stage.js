/**
 * Stage is an object used to render all
 * @author jleeson
 */
export class Stage {

    constructor() {
        /**
         * @type {Array}
         */
        this.actors = [];
    }

    /** draws all actors belonging to this stage */
    draw() {
        for (let i in this.actors) {
            ctx.drawImage(this.actors[i].image, this.actors[i].x, this.actors[i].y, this.actors[i].width, this.actors[i].height);
        }
    }

    /**
     * adds an actor to the Stage
     * @param {Actor} actor 
     */
    addActor(actor) {
        this.actors.push(actor);
    }
}