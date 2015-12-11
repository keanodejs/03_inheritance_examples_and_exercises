// Arrays and objects may not behave as you expect them. 
 
var mammal = {
	name : 'mammal',
	lastName : 'mammal',
	fullName : function () {
		return this.name + ' ' + this.lastName;
	},
	skills : [],
	father : {}
}
var dog = {}
var cat = {}

// dog and cat inherits from mammal
dog.__proto__ = mammal;
cat.__proto__ = mammal;

dog.name = 'fido';
dog.lastName = 'boo';

console.log('Mammal: ' + mammal.fullName());
console.log('Dog: ' + dog.fullName());

// Array
//dog.skills.push('jump');
 dog.skills = ['jump'];

// Object
//dog.father.name = 'Faddoo'; // add property to obkect
 dog.father = { name : 'fadooo'}

console.log('Mammal: ' + mammal.skills + ' ' + mammal.father.name);
console.log('Dog: ' + dog.skills + ' ' + dog.father.name);













