class Rescuer extends Person{
    constructor(job, biography) {
        super();
        this.job = job;
        this.biography = biography;
    }
    job;
    biography;

    get job() {
        return this.job;
    }

    set job(value) {
        this.job = value;
    }

    get biography() {
        return this.biography;
    }

    set biography(value) {
        this.biography = value;
    }
}