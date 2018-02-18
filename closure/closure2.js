function foo() {

    var a = 2;

    function bar() {
        console.log(a);
    }

    toz(bar);
}

function toz(fn) {
    fn();
}

foo(); //2