//settimeout is an async js func. it doesn't affect the execution of other functions in stack.
setTimeout(() => {
    console.log("prints after 5000s"); //prints fifth as per stack and timing
  }, 5000);
  setTimeout(() => {
    console.log("prints after 3000s");  //prints fourth as per stack and timing
  }, 3000);
  setTimeout(() => {
    console.log("prints after 1000s"); //prints third as per stack and timing
  }, 1000);
  console.log('prints immediately'); //prints first as it is synchronus
  setTimeout(() => {
    console.log("prints after 0s");  //prints second as per stack and timing
  }, 0);