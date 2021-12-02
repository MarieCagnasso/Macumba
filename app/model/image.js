class Image{
    constructor(url, legend){
        this.url = url;
        this._legend = legend;
    }

    get legend() {
        return this._legend;
    }

    set legend(value) {
        this._legend = value;
    }
}