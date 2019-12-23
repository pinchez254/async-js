console.log("before");

_getUser("o134ghemj", user => console.log("user", user));

console.log("intermediate");

//callbacks
console.log("after");
function _getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from dB...");
    callback({ id: id, gitHubUsername: "pinchez254" });
  }, 2000);
}

//Promises
// Async / Await
//async function
