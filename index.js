console.log("before");

console.log("intermediate");

//async function
setTimeout(() => {
  console.log("after 3 seconds");
}, 3000);

console.log("after");
