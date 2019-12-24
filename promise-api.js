// already resolved promise
const p = Promise.resolve({id: 1}) .then(result => console.log(result))