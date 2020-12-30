

fetch('base.json', {
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.text())

