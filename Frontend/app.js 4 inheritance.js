class person {
    constructor(name, age) {
        console.log("person calss constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi I am ${this.name}`);
    }
}


class Student extends person {
    constructor(name, age, marks) {
        console.log("student calss constructor");
        super(name, age);     //parent class constructor is being called 
        this.marks = marks;

    }

    }


let stu1 = new Student("adam"  , 25, 95);


class Teacher extends person {
    constructor(name, age, subject) {
    super(name, age);  //parent class constructor is being called 

        this.subject = subject;
    }
    
    }
