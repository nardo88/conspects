
function counter() {
	let n = 0

	return {
		count: () => n++,
		reset: () => n = 0
		}
}

let c = counter()
let d = counter()



	