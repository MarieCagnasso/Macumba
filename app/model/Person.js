class Person {
    constructor(firstName, lastName, sex, birthDate, deathDate, birthPlace, deathPlace) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.birthPlace = birthPlace;
        this.deathPlace = deathPlace;
    }

    firstName;
    lastName;
    sex;
    birthDate;
    deathDate;
    birthPlace;

    get firstName() {
        return this.firstName;
    }

    set firstName(value) {
        this.firstName = value;
    }

    get lastName() {
        return this.lastName;
    }

    set lastName(value) {
        this.lastName = value;
    }

    get sex() {
        return this.sex;
    }

    set sex(value) {
        this.sex = value;
    }

    get birthDate() {
        return this.birthDate;
    }

    set birthDate(value) {
        this.birthDate = value;
    }

    get deathDate() {
        return this.deathDate;
    }

    set deathDate(value) {
        this.deathDate = value;
    }

    get birthPlace() {
        return this._birthPlace;
    }

    set birthPlace(value) {
        this._birthPlace = value;
    }

    get deathPlace() {
        return this._deathPlace;
    }

    set deathPlace(value) {
        this._deathPlace = value;
    }

    deathPlace;

}
