class user {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value.toUpperCase();
    }

    get pass() {
        return this._pass.toUpperCase();
    }

    set pass(value) {
        this._pass = value.toUpperCase();
    }
}

const parth = new user("parth@googleCEO.com", "ParthCEO123");
console.log(parth.email);
console.log(parth.pass);

// ------------------------------------------------------------------------------

function person(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const userOne = new person("parth@gmail.com", "Parth123");
console.log(userOne.email);
console.log(userOne.password);