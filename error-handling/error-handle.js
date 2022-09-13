class NotAllowedError extends Error {
    constructor(_message) {
        super(_message)
        this.name = 'ValueNotAllowed'
    }
}

function sayHi(name) {
    if (name === 'Surendra') {
        throw NotAllowedError
    } else {
        return `Hi 👋 ${name}`
    }
}

console.log(sayHi('Surendra'))