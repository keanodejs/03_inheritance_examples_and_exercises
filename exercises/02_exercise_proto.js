// Here we have 3 objects.
// Your job is to make them inherit from each other 
// in a way that will make both console.log() statements 
// in the end of the file print out 'true'

var machine = {
	motors : 4
};

var robot = {
	friendly : true
};
var robby = {};

// use __proto__ to create inheritance


// make both of the consle.log ´s print out 'true'
console.log(4 === robby.motors);
console.log(true === robby.friendly);
