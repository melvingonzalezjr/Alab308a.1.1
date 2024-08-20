/*********************
PART 1: STACK OVERFLOW
*********************/
let counter = 0;
//The function increases counter, then calls on itself again, thus a recursion that keeps going
function incrementCounter() {
    counter++
    incrementCounter()
}
//try-catch helps stop recursive functions
try {
    incrementCounter()
} catch (error) {
    console.log(`Sorry, Stack Overflow! Counter is ${counter}`);
}
