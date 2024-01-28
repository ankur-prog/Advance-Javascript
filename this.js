
 
//1 implicit binding  example 
const person = {
    name: 'John',
    age: 20,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}
person.greet(); // Hello, my name is John and I am 20 years old

// 2 explicit binding example 
function greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }

// call, apply and bind example
const person1 = {
    name: 'ankur',
    age: 20,
}
greet.call(person1); // Hello, my name is ankur and I am 20 years old
greet.apply(person1); // Hello, my name is ankur and I am 20 years old
const greetPerson = greet.bind(person);
greetPerson(); // Hello, my name is John and I am 20 years old


// 3 new keyword example
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}
const person2 = new Person('ankur', 20); // Person { name: 'ankur', age: 20 }
console.log(person2); // Person { name: 'ankur', age: 20 }  
console.log(person2.name); // ankur
console.log(person2.age); // 20


// 4 window binding example
greet() // Hello, my name is undefined and I am undefined years old 
// window binding means this keyword will point to window object
// window object is the global object in browser
globalThis.name = 'ankur';
globalThis.age = 20;
greet() // Hello, my name is ankur and I am 20 years old
