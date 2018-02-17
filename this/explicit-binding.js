//With call(context)
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
};

//link the obj context to the function foo
foo.call(obj); //2



//HARD BINDING call : using another function wich hard bind obj context to foo
//On the contrary to : var bar = foo;
var bar = function () {
    foo.call(obj)
};

bar(); //2
setTimeout(bar, 100); //2

a = 42;
bar.call(this); //2, even if we bind something else



//HARD BINDING apply : passing arguments through apply
function fooArg(something) {
    console.log(this.a, something);
    return this.a + something;
}

bar = function () {
    return fooArg.apply(obj, arguments);
};

var b = bar(3); //2 3
console.log(b); //5



//HARD BINDING bind
bar = fooArg.bind(obj); //return a hard-binded function

var b = bar(3); //2 3
console.log(b); //5

console.log(bar.name);