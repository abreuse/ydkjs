function init(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

var bar = new init(2, 3, 4);
console.log(bar.a, bar.b, bar.c); //2 3 4