class User{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    username;
    password;


    get username() {
        return this.username;
    }

    set username(value) {
        this.username = value;
    }

    get password() {
        return this.password;
    }

    set password(value) {
        this.password = value;
    }
}