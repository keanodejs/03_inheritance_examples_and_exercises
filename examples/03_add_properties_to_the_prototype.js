// 3 objects without properties
var mammal = {}
var dog = {}
var cat = {}

// Make mammal the prototype of dog
// Make mammal the prototype of cat
dog.__proto__ = mammal;
cat.__proto__ = mammal;

// What is 'dog.sound' & 'cat.sound'?
console.log(dog.sound); // -> undefined
console.log(cat.sound); // -> undefined


//  Define a 'sound' property on mammal, set this to 'mammal sound!!'
mammal.sound = 'Mammal Sound';

// What is 'dog.sound' & 'cat.sound' now?
console.log(dog.sound); // -> 'Mammal Sound'
console.log(cat.sound); // -> 'Mammal Sound'

// You can override the property from mammal
dog.sound = 'wuf';

// What is 'dog.sound' & 'cat.sound' now?
console.log(dog.sound); // -> 'Mammal Sound'
console.log(cat.sound); // -> 'Mammal Sound'

