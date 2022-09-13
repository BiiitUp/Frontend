// Syntax

// Function definition
function get_revision_id(...args) {
    return args.join();
}

function add(...args) {
    return args.reduce((a, b) => a + b);
}

// function invocation
console.log(get_revision_id(1, 2, 3, 4, 123, 124, 123))
console.log(add(1, 2, 3, 4))