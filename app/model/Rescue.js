class Rescue{
    constructor(date, description, individualRescue) {
        this.date = date;
        this.description = description;
        this.individualRescue = individualRescue;
    }
    date;
    description;
    individualRescue;


    get date() {
        return this.date;
    }

    set date(value) {
        this.date = value;
    }

    get description() {
        return this.description;
    }

    set description(value) {
        this.description = value;
    }

    get individualRescue() {
        return this.individualRescue;
    }

    set individualRescue(value) {
        this.individualRescue = value;
    }
}