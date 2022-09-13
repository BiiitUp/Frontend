function foo() {
    console.log("Foo")
}

function bar() {
    setTimeout(foo);
    console.log('bar')
}

function baz() {
    setTimeout(() => console.log('baz'))
}


function rep() {
    Promise.resolve().then(() => console.log('rep'))
}

console.log('start')
foo();
bar();
baz();
rep();
console.log('end')
