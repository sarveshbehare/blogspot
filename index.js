// import express from "express";
const express = require("express");     //do this to use DOM js and no need to write "type": "module" in package.json file


const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const app = express();
const port = process.env.PORT;


var blogs = [];

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
   
// var blogitem;
// var blogtitle;

// function logger(req,res,next){
//     blogitem = req.body["blogdata"];
//     blogtitle = req.body["title"];
//     next();
// }

// app.use(logger)

app.post("/api/saveblog",(req,res)=>{
    const blogitem = req.body["blogdata"];
    const blogtitle = req.body["title"];
    blogs.push([blogtitle,blogitem]);
    // res.render("index.ejs",{blogs});
    res.redirect("/gohome");
})


app.post("/api/saveedited",(req,res)=>{
    const haha = req.body["j"];
    const a = req.body["title"];
    const b = req.body["blogdata"];
    blogs[haha] = ([a,b]);
    // res.render("index.ejs",{blogs});
    res.redirect("/gohome");
})

app.get("/api/edit",(req,res)=>{
    const editind = req.query.editindex;
    res.render("editblog.ejs",{
        blogs,
        editind
    });
});

app.get("/api/deletee",(req,res)=>{
    const delind = req.query.editindex;
    blogs.splice(delind,1);
    // res.render("index.ejs",{blogs});
    res.redirect("/gohome");
});

app.get("/api/viewblog",(req,res)=>{
    res.render("seeblog.ejs",{
        ind : req.query.index,
        blogs
    })
});

app.get("/api/gohome",(req,res)=>{
    res.render("index.ejs",{blogs});
});

app.get("/api",(req,res)=>{
    blogs = [];
    res.render("index.ejs");
});

app.get("/api/postblog",(req,res)=>{
    res.render("postblog.ejs");
});

app.listen(port);

module.exports.handler = serverless(app);