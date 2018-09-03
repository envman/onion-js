const request = require('request')

const args = process.argv.slice(2, process.argv.length)
const userId = args[0]

let bonusMode
if (args[1] && args[1] == 'bonus') {

  bonusMode = true
}

let url = 'http://localhost:8080/installpackagescore'

if (bonusMode) {
  url = 'http://localhost:8080/installpackagescoreboooonus'
}

request({
  method: 'POST',
  url,
  json: true,
  body: {
    user: userId
  }
}, (err, response, body) => {
  if (err) return console.error(err)

  if (response.statusCode !== 200) {
    console.log('oh poop', body)
  }

  console.log('program executed sucessfully')
})