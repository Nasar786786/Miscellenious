//function personMaker(name, age) {
    //const person = {
    //name: name,
    //age: age,
    //talk() {
       // console.log(`Hi, my name is  ${this.name}`);
   // },
//};

//return person;
//}


function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
    }

    person.prototype.talk = function() {
        console.log(`Hi, ,my name is ${this.name}`);
    };

    let p1 = new person("adan", 25);
    let p2 = new Person("eve", 25);