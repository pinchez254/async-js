const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = [1, 2, 3]
    reject(new Error('Errror message'))
  }, 1000)
  //   resolve(data)
})

p.then(result => console.log('Result', result)).catch(err =>
  console.log('Error!', err.message),
)
