class RescueBoat extends Boat{
    constructor(affectation, manufacturer, lauchingDate, test, endOfService,) {
        super();
        this.affectation = affectation;
        this.manufacturer = manufacturer;
        this.lauchingDate = lauchingDate;
        this.test = test;
        this.endOfService = endOfService;
    }
    affectation;
    manufacturer;
    lauchingDate;
    test;
    endOfService;


    get affectation() {
        return this.affectation;
    }

    set affectation(value) {
        this.affectation = value;
    }

    get manufacturer() {
        return this.manufacturer;
    }

    set manufacturer(value) {
        this.manufacturer = value;
    }

    get lauchingDate() {
        return this.lauchingDate;
    }

    set lauchingDate(value) {
        this.lauchingDate = value;
    }

    get test() {
        return this.test;
    }

    set test(value) {
        this.test = value;
    }

    get endOfService() {
        return this.endOfService;
    }

    set endOfService(value) {
        this.endOfService = value;
    }
}