class Dimension{
    constructor(width, length, weight, draught) {
        this.length = length;
        this.width = width;
        this.weight = weight;
        this.draught = draught;
    }
    length;
    width;
    weight;
    draught;

    get length() {
        return this.length;
    }

    set length(value) {
        this.length = value;
    }


    get width() {
        return this.width;
    }

    set width(value) {
        this._width = value;
    }

    get weight() {
        return this.weight;
    }

    set weight(value) {
        this.weight = value;
    }

    get draught() {
        return this.draught;
    }

    set draught(value) {
        this.draught = value;
    }
}