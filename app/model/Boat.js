class Boat{
    constructor(name, description, isRescueBoat) {
        this.name = name;
        this.description = description;
        this.isRescueBoat = isRescueBoat;
    }
    name;
    description;
    isRescueBoat;

    get name() {
        return this.name;
    }

    get description() {
        return this.description;
    }

    get isRescueBoat() {
        return this.isRescueBoat;
    }

    set name(value) {
        this.name = value;
    }

    set description(value) {
        this.description = value;
    }

    set isRescueBoat(value) {
        this.isRescueBoat = value;
    }
}