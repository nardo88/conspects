// function logPerson() {
// 	console.log(`Person: ${this.name}, ${this.age}, ${this.job},`)
// }

// const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
// const person2 = {name: 'Елена', age: 19, job: 'SMM'}


// function bind(context, fn) {
// 	return function (...args) {
// 		fn.apply(context, args)
// 	}
// }

// bind(person1, logPerson)()
// bind(person2, logPerson)()



function calc(num) {
	return function (n) {
		console.log(num + n);
	}
}

const one = calc(10);
one(20);
one(55)


function createAdr(domain) {
	return function (url) {
		console.log(`https://${url}.${domain}`);
	}
}

const getAdr = createAdr('com');
getAdr('google');


function sendInfo() {
	console.log(`Person: ${this.name}, ${this.age}`);
}

const person = {name: 'Max', age: 23}


function bind(context, fn) {
	return function (...args) {
		fn.apply(context, args);
	}
}

bind(person, sendInfo)()

// function logPerson() {
// 	console.log(`Person: ${this.name}, ${this.age}, ${this.job},`)
// }

// const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
// const person2 = {name: 'Елена', age: 19, job: 'SMM'}


// function bind(context, fn) {
// 	return function (...args) {
// 		fn.apply(context, args)
// 	}
// }

// bind(person1, logPerson)()
// bind(person2, logPerson)()