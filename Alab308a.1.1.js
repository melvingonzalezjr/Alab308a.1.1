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

/******************
  PART 2: TRAMPOLINES
  ******************/
//Write recursive function
myArray = [0, [1, [2, [3, 4]]]]; //to test function

function flatten(array) {
  if (array.length === array.flat().length) {
    return array;
  } else {
    array = array.flat();
    return flatten(array);
  }
}
// console.log(flatten(myArray));

//Modify Function
//Create a new function, modFlatten(), but instead of directly doing as flatten() does directly, we use modFlatten()
//to have a return value of a dummy function, returnFlattened(). This allows the functionality of original flatten()
//method but as modFlatten() must return the result of returnedFlatten(), we can tackle the Stack Overflow problem
function modFlatten(array) {
  return (function returnFlattened(dummyArray) {
    if (dummyArray.length === dummyArray.flat().length) {
      return dummyArray;
    } else {
      dummyArray = dummyArray.flat();
      return returnFlattened(dummyArray);
    }
  })(array); //Call on array immediately be used as parameter in returnFlattened
}
//Trampoline
function trampoline(functionToTrampoline) {
  let result = functionToTrampoline;
  while (typeof result === "function") {
    result = result();
  }
  return result;
}

console.log(trampoline(modFlatten(myArray)));

//same result as commented out console.log on line 31.

