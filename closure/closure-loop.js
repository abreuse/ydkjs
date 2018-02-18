
//we create a closure with IIFE over our timer function
//we pass the i parameter to each function declaration, so each function has its own variable i (1,2,3,4,5)

for(var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function timer() {
            console.log('with IIFE ' + i);
        }, i*1000);
    })(i)
}




//OR, juste use let : it redeclares the variable 'i' for EACH ITERATION of the loop

for(let i = 1; i <= 5; i++) {

        setTimeout(function timer() {
            console.log('with let ' + i);
        }, i*1000);

}