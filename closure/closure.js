function foo() {

    var a = 2;

    function bar() {
        console.log(a);
    }

    return bar; //keep the outer scope active to get 'a' whenever needed
}

var toz = foo();

toz(); //2,