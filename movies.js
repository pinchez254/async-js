//get customer
//check if customer is gold
//get top movies
//send email to customer with list of top movies

async function ReplyMail() {
  try {
    const customer = await _getCustomer('pinchez')
    console.log(customer)
    const topMovies = await _getTopmovies()
    console.log('Top Movies', topMovies)
    const SentEmail = await _sendEmail(topMovies)
    console.log('Sent Email', SentEmail)
  } catch (err) {
    console.log(Error(err))
  }
}
_getCustomer = name => {
  return new Promise((resolve, reject) => {
    console.log('Getting customer')
    setTimeout(() => {
      let Customer = {
        name: name,
        email: 'pinchestheone@gmail.com',
        id: '2376gc8279180rr',
      }
      resolve(Customer)
    }, 1000)
  })
}

_getTopmovies = name => {
  return new Promise((resolve, reject) => {
    console.log('Getting TopMovies')
    setTimeout(() => {
      let Movies = {
        1: 'Mirrors',
        2: 'John wick',
        3: 'silicon valley',
      }
      resolve(Movies)
    }, 1000)
  })
}

_sendEmail = movies => {
  return new Promise((resolve, reject) => {
    console.log(`sending Movies...`)
    setTimeout(() => {
      resolve(movies)
    }, 500)
  })
}

ReplyMail()
