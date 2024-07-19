// Question2: True Or False [16 points]
// 1- Encapsulation is a mechanism which represent the essential features without including implementation details.
// false Abstraction

// 2- Encapsulation lets you focus on what the object does instead of how it does it
// false Abstraction

// 3- Abstraction means hiding the internal details or mechanics of how an object does something
// false Encapsulation

// 4- Overriding happens at compile-time
false;

// 5- Overloading happens at runtime
false;

// 6- Static binding is being used for overloaded methods and dynamic binding is being used for overridden/overriding method
true;

// 7- binding object state(fields) and behavior(methods) together. If you are creating class, you are doing encapsulation.
true;
// 8- Polymorphism is a object oriented programming feature that allows us to perform a single action in different ways.
true;

// Question 4 : What is The Output [20 Points]

function Person(a, b) {
	this.a = a;
	this.b = b;
}

const hossam =new Person("ssa", "ss")

Person.getFullName = function () {
  return `${this.a} ${this.b}`
}

console.log(hossam.getFullName())