/*********************
PART 1: STACK OVERFLOW
*********************/
// let counter = 0;
// //The function increases counter, then calls on itself again, thus a recursion that keeps going
// function incrementCounter() {
//     counter++
//     incrementCounter()
// }
// //try-catch helps stop recursive functions
// try {
//     incrementCounter()
// } catch (error) {
//     console.log(`Sorry, Stack Overflow! Counter is ${counter}`);
// }

//CODEBOX TEXT HERE!!!
// /**
//  * Step One: write the recursive function.
//  *
//  * Here, we create a function that calculates
//  * the factorial of a number, n. A factorial
//  * is the product of all positive integers
//  * less than or equal to the number, n.
//  */
// const factorial = (n) => {
//     if (n === 0) return 1; // The base case, to stop recursion
//     return n * factorial(n - 1); // The recursive call
//   }

//   /**
//    * If we were to call the above with a number as
//    * high as, say, 50,000, it would result in a stack
//    * overflow.
//    */

//    /**
//     * Step Two: modify the recursive function.
//     *
//     * In order to trampoline the function, we must
//     * return another function instead of calling
//     * the recursive function itself.
//     *
//     * This prevents the function from being added
//     * directly to the call stack.
//     */
//    const facto = (n, a = 1) => {
//      if (n === 0) return a;
//      return () => facto(n - 1, n * a);
//    }

//    /**
//     * Step Three: create a trampoline function.
//     *
//     * This function takes another function and a list
//     * of arguments, and uses a linear loop rather than
//     * traditional recursion to handle the function calls.
//     *
//     * This prevents the stack overflow, while still
//     * maintaining the declarative approach provided by
//     * recursive functions.
//     */
//    const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//       result = result();
//     }
//     return result;
//   }

//   /**
//    * Now, we can call the factorial function with as high
//    * a number as we would like (as long as we don't run into
//    * other errors, like exceeding MAX_SAFE_INTEGER, or looping
//    * too many times...).
//    *
//    * Unfortunately, both of these are the case here, but
//    * the principle of trampolining holds!
//    */
//   console.log(trampoline(facto(10000)))

/******************
  PART 2: TRAMPOLINES
  ******************/
//Write recursive function
myArray = [0, 1, 2, [3, 4]];
function flatten(array) {
  return array.reduce(
    (
      acc,
      curr 
    ) =>
    //each element will be added to a new accumulator array(originally empty)
    //if current value to add is array, we call flatten on curr recursively until we have concat all elements within
    //curr (if any more nested loops. We call flatten on those and keep using concat until we are flat)
    //each singulaof inner array is concatenated to outer array. Keep going
      Array.isArray(curr) ? acc.concat(flatten(curr)) : acc.concat(curr),
    []
  );
}
console.log(flatten(myArray));

//Modify recursive function
// const

//  const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//         result = result();
//     }

//     return result;
// }

// console.log(trampoline(flatten(myArray)));

/*************************
PART 3: DEFERRED EXECUTION: Not Required. Will work on it on my own time for further learning/enhancement.
*************************/
// let textElement = document.createElement('text')

// function addPrimes(n) {
//     const primes = [1,2];
//     for (let i = 3; i <= n; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= i**.5; j++) {
//             if (i%j == 0) {isPrime = false; break;}
//         }
//         if (isPrime) {primes.push(i)}
//     }
//     console.log(primes);

//     let sum = primes.reduce((acc, curr) => {
//         acc + curr;
//     }, 0)

//     console.log(sum);

// }
// addPrimes(10)
