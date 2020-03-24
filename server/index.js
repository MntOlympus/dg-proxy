const express = require('express');
const app = express();
const path = require('path');
const PORT = 3079;

var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

app.use(express.static(__dirname + '/../public'))


//______________________________________________________________
// all releated API requests for components mounted in proxy
//______________________________________________________________


//______________________________________________________________
// reservations
//______________________________________________________________
app.all('/api/properties', (req, res) => {
  proxy.web(req, res, {target: "http://localhost:3000"});
})

app.all('/images*', (req, res) => {
  proxy.web(req, res, {target: "http://localhost:3000"});
})


//______________________________________________________________
// reviews
//______________________________________________________________
app.all('/api/properties', (req, res) => {
app.all('/api/listing', (req, res) => {
  proxy.web(req, res, {target: "http://localhost:3500"});
})

app.all('/api/reviews', (req, res) => {
  proxy.web(req, res, {target: "http://localhost:3500"});
})


//______________________________________________________________
// recommendations
//______________________________________________________________
app.all('/api/properties', (req, res) => {
app.all('/recommendations', (req, res) => {
  proxy.web(req, res, {target: "http://localhost:3009"});
})


//______________________________________________________________
// photos
//______________________________________________________________
app.all('/api/properties', (req, res) => {
app.all('/photos', (req, res) => {
  proxy.web(req, res, {target: "http://localhost:3001"});
})

//______________________________________________________________

app.listen(PORT, err =>  {
  if (err) {
    console.error(err);
  }
  console.log(`server up and running on port ${PORT}`)
})