#!/usr/bin/nodejs
const express = require('express');
const moment = require('moment');
const mustache = require('mustache');

const app = express();

app.use(function(req, res, next){
    let result ="["+moment().format("YYYY-MM-DD HH:mm:ss")+"] ";
    result += "" + req.ip;
    result += "" + req.method;
    result += "" + req.originalUrl;

    console.log(result);
    next();
});

app.use(express.static('public'))

app.get("/hello", function(req, res){
    const text =mustache.render("{{hello}}to{{name}}",{hello:"Hello", name: req.ip});
    res.send(text);
});

app.listen(80, () => {
    console.log("Started server on port: " + 80);
    console.log("Test on URL: valhall.htsit.se:MY_WEB_PORT");
});
