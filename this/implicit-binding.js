function foo() {
    console.log(this.a);
}

//passing by a container (obj) will make this of foo() become 'obj'
var obj = {
    a: 2,
    foo: foo
};

obj.foo(); //2



//Variante : Only the last container call is passing the this, here obj2
var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a:2,
    obj2: obj2
};

obj1.obj2.foo(); //42


//WARNING : assign a function will just assign the reference, here 'bar' it's just another reference to foo(), not to obj2.foo
var bar = obj2.foo;

a = "from global scope";

bar(); //from global scope