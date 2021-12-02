class RescueBoat extends Boat{
    constructor(affectation, manufacturer, lauchingDate, test, endOfService,) {
        super();
        this._affectation = affectation;
        this._manufacturer = manufacturer;
        this._lauchingDate = lauchingDate;
        this._test = test;
        this._endOfService = endOfService;
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