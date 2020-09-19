
function getText() {
    const request = new XMLHttpRequest()
    request.open("GET", "http://jsonplaceholder.typicode.com/users", false)
    request.send()
}

getText()

