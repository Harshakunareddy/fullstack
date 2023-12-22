// Abstraction
// => Essential Information

// Encapsulation
// => All Things Are Together , Privacy //still in progress

// Inheritance
// => Having Characteristics Of Another Class With Our Own

// Polymorphism
// => Having More Then One Form , Relation with others

// Prototype Inheritance

// (person) => object;

class Person{
    #password;

    constructor(fullName, age,password){

        this.fullName = fullName;
        this.age = age;
        // this.password = password;
        this.#password = password;
        // this._password = password;

    }
    talk(){
        console.log("hey",(this.fullName));
        console.log(`hey ${this.age}`);
    }
}


const john = new Person("John Doe",10,"HeyHello");
john.isMarried = true;
console.log(john);
console.log(john.password);
// console.log(john.#password);

























// const john = new Person("john Doe",true);
// const sam = new Person("sam doe",true);

// john.intro();



// console.log(john.__proto__);
// console.log(sam.__proto__);
// sam.__proto__.intro =function outro(){
//     console.log("changed intro");
// }

// console.log(john);
// // console.log(sam);
// // john.intro();
// // sam.intro();

// class Student extends Person{
//     constructor(fullName,isStudying,a){
//     super(fullName,isStudying);
//     this.a = a;
// }
// greet() {
//     console.log("hey man Student");
// };
// }

// const stuObj = new Student("b",true,10);
// console.log(stuObj);
// stuObj.greet();

// // sam.greet();

// console.log(Person.prototype);
// console.log(Student.prototype);















