class Victim extends Person{
    constructor(isChild, isTeen, isAlive) {
        super();
        this.isChil = isChild;
        this._isChild = isChild;
        this._isTeen = isTeen;
        this._isAlive = isAlive;
    }
    isChild;
    isTeen;
    isAlive;

    get isChild() {
        return this.isChild;
    }

    set isChild(value) {
        this.isChild = value;
    }

    get isTeen() {
        return this.isTeen;
    }

    set isTeen(value) {
        this.isTeen = value;
    }

    get isAlive() {
        return this.isAlive;
    }

    set isAlive(value) {
        this.isAlive = value;
    }
}