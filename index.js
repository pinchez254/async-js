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
const _logUser = _getUser('134ghemj134ghemj').then(user => console.log(user))
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
    let repos = ['repo1', 'repo2', 'repo3..']
    setTimeout(() => {
      console.log(`fetching ${name} github repos..`)
      resolve(repos)
    }, 1000)
  })
}

// Async / Await
//async function
