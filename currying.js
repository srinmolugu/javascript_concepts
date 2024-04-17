//let us consider basic function initially
function addFunc(a, b, c) {
    return a + b + c;
}
console.log('output:',addFunc(1,2,3)); //output: 6

//currying
//currying transforms a function with multiple arguments into a sequence/series of functions, each taking a single argument
function addFuncCurrying(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log('currying output:',addFuncCurrying(1)(2)(3))