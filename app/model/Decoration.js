class Decoration{
    constructor(date, title){
        this.date = date;
        this.title = title;
    }
    date;
    title;

    get date() {
        return this.date;
    }

    set date(value) {
        this.date = value;
    }

    get title() {
        return this.title;
    }

    set title(value) {
        this.title = value;
    }
}