var animal = {};

// Using the Object.create() method, create an object 'reptile' 
// and an object 'mammal'
// they should both inherit from animal.

var reptile = Object.create(animal);
var mammal = Object.create(animal);

// Using the Object.create() method, create an object 'snake' 
// and an object 'lizard' inheriting from reptile 
// and create an object 'dog' and 'cat' both inheriting from mammal

var snake = Object.create(reptile);
var lizard = Object.create(reptile);

var dog = Object.create(mammal);
var cat = Object.create(mammal);

// with the functions getPrototypeOf() and isPrototypeOf() check:

// What prototype the cat has 
console.log(mammal.isPrototypeOf(cat));
console.log(Object.getPrototypeOf(cat) === mammal);
// if animal is prototype of dog
console.log(mammal.isPrototypeOf(dog));
// if snake is prototype of reptile
console.log(snake.isPrototypeOf(reptile));
// What the prototype of animal is
console.log(Object.getPrototypeOf(animal));

console.log(Object.getPrototypeOf(Object)); // -> [Function: Empty]

// Draw on a piece of paper the inheritance diagram for your solution

// https://drive.google.com/open?id=0BzLKPZ6IszLEbU9uMkFKUzJrSHc







