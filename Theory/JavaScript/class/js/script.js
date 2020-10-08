class Animal{
	constructor(options){
		this.name = options.name
		this.age = options.age
		this.hasTail = options.hasTail
	}
	voice(){
		console.log('I am Animal')
	}

}

const animal = new Animal({
	name: 'Animal',
	age: 5,
	hasTail: true
})

console.log(animal instanceof Animal);
// Вернет true

class Cat extends Animal{
	constructor(options){
		super(options)
		this.color = options.color
	}
	get ageInfo(){
		return this.age * 7
	}
	set ageInfo(newAge){
		this.age = newAge
	}
}



const cat = new Cat({
	name: 'Cat',
	age: 7,
	hasTail: true
})






class Component{
	constructor(selector){
		this.$el = document.querySelector(selector)
	}
	hide(){
		this.$el.style.display = 'none'

	}
	show(){
		this.$el.style.display = 'block'
	}
	bgcolor(colorItem){
		this.$el.style.background = colorItem
		
	}
}

class Box extends Component{
	constructor(options){
		super(options.selector)
		this.$el.style.width = this.$el.style.height = options.size + 'px'
		this.$el.style.background = options.color
	}
}

const box1 = new Box ({
	selector: '.box1',
	size: 100,
	color: 'red'
})






