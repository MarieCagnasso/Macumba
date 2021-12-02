class Victim extends Person{
    constructor(isChild, isTeen, isAlive) {
        super();
        this.isChild = isChild;
        this.isTeen = isTeen;
        this.isAlive = isAlive;
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