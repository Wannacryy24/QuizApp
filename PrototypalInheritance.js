//Prototype chain
//When a property or method is not found on an object, JavaScript follows the _proto_ link to look for it higher up the chain.
console.log(john._proto_=== Person.prototype);
console.log(Person.prototype._proto_ === Object.prototype);
console.log(Object.prototype._proto_);

//Prototypal Inheritance
function Animal(){}
Animal.prototype.eat = function(){
    console.log('Eating');
}

function Dog(name){
    this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log('Bho! Bho!');
}

const dog1 = new Dog('Jerry');
console.log(dog1);
dog1.bark();
dog1.eat();

//hasOwnProperty: Checks if a property exists on the object itself (not inherited).
dog1.hasOwnProperty('name');//true
dog1.hasOwnProperty('bark');//false

//isPrototypeOf
Dog.prototype.isPrototypeOf(dog1)

//Object.create()





