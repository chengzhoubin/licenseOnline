/**
 * @file app.js
 * The starting point of the application.
 * Express allows us to configure our app and use
 * dependency injection to add it to the http server.
 * 
 * The server-side app starts and begins listening for events.
 **/
const http = require('http')  // use require to import the Node.js http package
const express = require('express')  // require Express framework
const app = express()  // create an Express web app
const server = http.createServer(app)  // pass in the Express app to our http server
const path = require('path')
const cfg = require('./config')
const env = cfg.environment[cfg.Keys.evnDevelopment];

const hostname = env.server.hostname    // allows access from remote computers
const port = env.server.port;

// initialize data ............................................
require('./utils/seeder.js')(app)  // load seed data

// By default, Express does not serve static files. 
// Configure middleware with app.use
// use '/public to access files in the 'public' folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/html', express.static(path.join(__dirname, 'html')));

const routing = require('./routes/router.js')
app.use('/', routing)  // load routing
/*
var aa = function(){

}

console.log(aa.constructor.name);
*/
const developSchema = require('./models/developer')
const mongooseDb = require("mongoose")
console.log(env.database.url)
var db = mongooseDb.createConnection(env.database.url,{useNewUrlParser:true})
let develop = db.model('Develop', developSchema)
/*
let demo = new develop({
  "_id": 100,
  "email": "dcase100@nwmissouri.edu",
  "given": "Denise100",
  "family": "Case100",
  "city": "Maryville",
  "state": "MO",
  "zip": 64467,
  "country": "USA",
  "URL": "https://www.nwmissouri.edu/csis/directory/case100.htm"
})
demo.save((err) => {
  console.log(err)
})
*/
/*
develop.$where('this.email === "dcase@nwmissouri.edu"' ).exec((err,res)=>{
  console.log(res);
})
*/
/*
develop
  .where('_id').gte(100)
  .or([{email:'dcase@nwmissouri.edu'}])
  .select('email given')
  .exec((err,res)=>{
  console.log(res);
});
*/
/*
develop.updateOne({_iid:99},{'$set':{'email':'dcase@nwmissouri.edu2.com'}},(err,raw)=>{
  console.log(err||{exp:"123"});
  console.log(typeof(err));
  console.log(raw);
});
*/
/*
develop.update({_id:99},{'$set':{'email':'dcase@nwmissouri.edu.com'}}).exec((err,res)=>{
  console.log(res);
});
*/

var deletedResult = develop.remove({_id:101},(err)=>{
  console.log(err);
});
console.log(deletedResult.n);

server.listen(port, hostname, () => {
  // Tell the user where to find the app (use backtics with variables)
  console.log(`App running at http://${hostname}:${port}/`)
  console.log('Press CTRL-C to stop\n')
})