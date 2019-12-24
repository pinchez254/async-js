// already resolved promise
const Resolved = Promise.resolve({ id: 1 }).then(result => console.log(result))

//Already rejected promise
const Rejected = Promise.reject(
  new Error('Reason for rejection...'),
).catch(err => console.log(err.message))
