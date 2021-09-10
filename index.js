const express = require('express')
const request = require('request')
const app = express()
const port = 4000
let ipCount = [];

const requestOptions = {
  url: 'http://ifconfig.io/all.json',
  method: 'GET',
  json: {},
  qs: {
    offset: 20
  }
};

function getIp(req, res) {
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      const ip_a = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      // const ip_a = req.connection.remoteAddress;
        if(!ipCount[ip_a]){
          ipCount[ip_a] = 1
        } else{
          ipCount[ip_a]++
        }
        console.log(ipCount)
      res.send(ipCount[ip_a] + ' x request to server ' + body.ip + ' dari ' + ip_a.split(':')[3]);
    } else {
      console.log(response.statusCode);
    }
  })
}

app.get('/', (req, res) => {
    getIp(req, res)
})

app.listen(port, () => {
  console.log('APP RUNNING')
})