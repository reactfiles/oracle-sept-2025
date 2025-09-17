import Vijay from "./person.js";

class SuperHero extends Vijay{
    rage = 5;
    constructor(nrage, nability){
        super(nability);
        this.rage = nrage;
    }
};

export { SuperHero }