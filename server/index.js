const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

app.use(express.static(__dirname + '/../public'))

app.all('/recommendations', (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:3009' });
})

app.listen(PORT, err =>  {
  if (err) {
    console.error(err);
  }

  console.log(`server up and running on port ${PORT}`)
})