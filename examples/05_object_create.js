var vehicle = {
	speed : 100
}

var car = Object.create(vehicle);
var thePrototype = Object.getPrototypeOf(car);

console.log('Car speed: ' + car.speed);
// getPrototypeOf()
console.log(Object.getPrototypeOf(car) === vehicle);
// isPrototypeOf()
console.log(vehicle.isPrototypeOf(car));

// Compare to what we know so fare
console.log(car.__proto__ === vehicle);