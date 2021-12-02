class Image{
    constructor(url, legend){
        this.legend = legend;
        this.url = url;
    }
    legend;
    url;

    get url() {
        return this.url;
    }

    set url(value) {
        this.url = value;
    }

    get legend() {
        return this.legend;
    }

    set legend(value) {
        this.legend = value;
    }
}