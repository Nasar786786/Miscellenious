class Box {
    constructor(name , l ,b) {      //base class / parent class
        this.name = name;
        this.l = l;
        this.b =b;
    }

    area() {
        let area = this.l * this.b;
        console.log(`Box area is ${area}`);
    }
}

class Square extends Box  {     //child class 
    constructor(a) {
        super("square", a , a);
    }

    area() {
        let area = this.l * this.b;
        console.log(`Square area is ${area}`);
    }
}

let sq1 = new Square(4);
sq1.area();