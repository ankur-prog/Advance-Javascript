/**
 * Classes are a template for creating objects. They encapsulate data with code to work on that data. 
 * Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
 * 
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * greet is a method of Person class
     */
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}   
// define a person object
const person = new Person('ankur', 20);
console.log(person); // Person { name: 'ankur', age: 20 }
console.log(person.name); // ankur
console.log(person.age); // 20
person.greet(); // Hello, my name is ankur and I am 20 years old


// Inheritance in class
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and I am in grade ${this.grade}`);
    }
}
const student = new Student('ankur', 20, 12);
console.log(student); // Student { name: 'ankur', age: 20, grade: 12 }
console.log(student.name); // ankur
console.log(student.age); // 20
console.log(student.grade); // 12
student.greet(); // Hello, my name is ankur and I am 20 years old and I am in grade 12
