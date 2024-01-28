/*
    * Prototype is a property on a function that points to an object.
    * Prototype is used primarily for inheritance; you add methods and properties on a function's prototype property to make 
    * those methods and properties available to instances of that function.
    * Prototype is not a class; it is a property on a function.
    * Prototype is not an instance of a class; it is an object.
    * Prototype is not a copy of an object; it is an object.
    * Prototype is not a parent of an object; it is an object.
    * Prototype is not a template of an object; it is an object.
    * Prototype is not a blueprint of an object; it is an object.
    * Prototype is not a class of an object; it is an object.
    * Prototype is not a constructor of an object; it is an object.
    * Prototype is not a factory of an object; it is an object.
*/



/**
 * 
 * @param {*} fname 
 * @param {*} lname 
 * @returns
 * 
 */
function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}
// Add a method to the Person class prototype to return the full name of the person.
Person.prototype.getFullName = function() {
    return this.fname + ' ' + this.lname;
};

// Create a new instance of the Person class and call the getFullName method.
person1 = new Person('ankur', 'singh');
console.log(person1.getFullName()); // ankur singh
console.log(person1.fname); // ankur
console.log(person1.lname); // singh
console.log(person1); // Person { fname: 'ankur', lname: 'singh' }

// Create another instance of the Person class and call the getFullName method.
person2 = new Person('john', 'doe');
console.log(person2.getFullName()); // john doe
console.log(person2.fname); // john
console.log(person2.lname); // doe
console.log(person2); // Person { fname: 'john', lname: 'doe' }


// inheritance in javascript using prototype property
/**
 * 
 * @param {*} fname 
 * @param {*} lname 
 * @param {*} age 
 * @returns 
 */
function Student(fname, lname, age) {
    Person.call(this, fname, lname);
    this.age = age;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.getAge = function() {
    return this.age;
};
const student1 = new Student('ankur', 'singh', 30);
console.log(student1.getFullName()); // ankur singh
console.log(student1.fname); // ankur
console.log(student1.lname); // singh
console.log(student1.age); // 30
console.log(student1.getAge()); // 30
console.log(student1); // Student { fname: 'ankur', lname: 'singh', age: 30 }
console.log(student1 instanceof Person); // true
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Object); // true
console.log(student1 instanceof Function); // false
