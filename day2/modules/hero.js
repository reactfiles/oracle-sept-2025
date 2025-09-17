import Oracle from "./person.js";

class Hero extends Oracle {
    title = "default title";
    firstname = "default firstname";
    lastname = "default lastname";
    #power = 5;
    static version = 1001;
    constructor(fname, lname, nability) {
        super(nability);
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    #myprivatemethod() {
        return "can not be accessed outside the class";
    }
    static mystaticmethod() {
        return "can be accessed only on the class";
    }
    get power() {
        return this.#power;
    }
    set power(npower) {
        this.#power = npower;
    }
};

export { Hero as Avenger };// alias export 