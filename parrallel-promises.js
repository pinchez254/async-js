const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('fetching promise one')
    // resolve(1)
    reject(new Error('Something went wrong!'))
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('fetching promise Two')
    resolve(2)
  }, 1000)
})

Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log(Error(err)))
