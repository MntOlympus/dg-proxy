const express = require('express');
const app = express();
const path = require('path');
const PORT = 3010;

const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

const reservationsURL = "http://localhost:3000";
const photosURL = "http://localhost:3001";
const reviewsURL = "http://localhost:3500";
const recommendationsURL = "http://localhost:3009";

app.use(express.static(__dirname + '/../public'));


//______________________________________________________________
// all releated API requests for components mounted in proxy
//______________________________________________________________


//______________________________________________________________
// photos
//______________________________________________________________
app.all('/photos', (req, res) => {
  proxy.web(req, res, {target: photosURL});
})

// ______________________________________________________________
//  reviews
// ______________________________________________________________
app.all('/api/listing', (req, res) => {
  proxy.web(req, res, {target: reviewsURL});
})

app.all('/api/reviews', (req, res) => {
  proxy.web(req, res, {target: reviewsURL});
})

//______________________________________________________________
// reservations
//______________________________________________________________
app.all('/api/properties', (req, res) => {
  proxy.web(req, res, {target: reservationsURL});
})

app.all('/images*', (req, res) => {
  proxy.web(req, res, {target: reservationsURL});
})

//______________________________________________________________
// recommendations
//______________________________________________________________
app.all('/recommendations', (req, res) => {
  proxy.web(req, res, {target: recommendationsURL});
})


//______________________________________________________________

app.listen(PORT, err =>  {
  if (err) {
    console.error(err);
  }
  console.log(`server up and running on port ${PORT}`)
})