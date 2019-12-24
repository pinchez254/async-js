console.log('before')

// _getUser('o134ghemj', user => {
//   console.log('user', user)

//   //get user repos
//   getRepos(user.gitHubUsername, repos => {
//     console.log(repos)
//   })
// })

console.log('intermediate')

//callbacks
console.log('after')
// function _getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading user from dB...");
//     callback({ id: id, gitHubUsername: "pinchez254" });
//   }, 1000);
// }

// function getRepos(name, callback) {
//   let repos = ['repo1', 'repo2', 'repo3..']
//   setTimeout(() => {
//     console.log(`fetching ${name} github repos..`)
//     callback(repos)
//   }, 1000)
// }

//Promises
// _getUser('134ghemj134ghemj')
//   .then(user => getRepos(user.gitHubUsername))
//   .then(repos => console.log('Repos', repos))
//   .catch(err => console.log('Error!', err.message))

function _getUser(id) {
  console.log('Reading user from dB...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubUsername: 'pinchez254' })
    }, 1000)
  })
}

function getRepos(name) {
  return new Promise((resolve, reject) => {
    console.log(`fetching ${name} github repos..`)
    setTimeout(() => {
      let repos = ['repo1', 'repo2', 'repo3..']
      resolve(repos)
    }, 500)
  })
}

// Async / Await

async function displayRepos() {
  const user = await _getUser('fivub18e680')
  console.log('user', user)
  const repos = await getRepos(user.gitHubUsername)
  console.log('Repos', repos)
}

displayRepos()
//async function
