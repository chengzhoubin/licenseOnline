const express = require('express')
const api = express.Router()
const Model = require('../models/apply.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find developer with id='

api.get('/find',(req,res) => {

})

//license申请
api.post("/apply",(req,res) => {
    res.setHeader('Content-Type', 'application/json')
    //var ts = new Promise()
    Promise.resolve().then(()=>{
        var ret = {
            call:true
        } 
        res.send(JSON.stringify(ret))   
    })
    
    //console.log(req.body)
    
})

module.exports = api


