class Mammal {
    constructor(name) {      //base class / parent class
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal {     //child class 
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("wooff..");
    }
}

class Cat extends Mammal {   // child class
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow.");
    }
}