function utestA(){

}

utestA.prototype.testA = function(){

}

//var ut1 = new utestA();
//ut1.prototype.test1 = function(){
  
//}

var father = function() { 
    this.age = 52; 
    this.say = function(){
        console.log('hello i am '+ this.name +' and i am '+this.age + 'years old'); 
    }
  }

  father.prototype.say1 = function(){

  }
   
  var child = function() { 
    this.name = 'bill'; 
    father.call(this); 
  }
   
  var father1 = new father();
  var man = new child();
  man.say();

  class A{
    constructor(){
      console.log("constructor A");
      //return this;
      //this.User = "xxx"
    }

    Add(){
      console.log("Add");
    }
  }

  class B extends A{
    constructor(){
      super();
      console.log("B");
    }

    Add(){
      //super.Add();
      console.log("testA");
    }
  }

  var b = new B();
  b.Add();

  require('./test');
  require('./test1')
  //console.log(b.User);

  class testA{
     add(){

     }
  }

  class testB{
    addB(){

    }
 }

  var func1 = function(){

  }
  var testObjectA = new testA();
  //var propertype1 = Object.create(testObjectA.__proto__,{x:true});
  console.log("12")
//var l1 = new l();

 var p = {
   p1:{
    name:"test1",
    value:"test1"
   }
 }
 //var xp = new p();
var { p1 } = p;

let map1 = new Map([["b",1],["c","12"]]);
map1.set("d","12");
console.log(`map1:${map1.get("d")}`);
for(let mapItem of map1.keys()){
  console.log(mapItem)
}
for(let mapValue of map1.values()){
  console.log(mapValue)
}
for(let itemEnt of map1.entries()){
  console.log(itemEnt);
  console.log(itemEnt[0]);
}
for(let [key,value] of map1.entries()){
  console.log(`${key},${value}`)
}
var arr = [...map1].filter(x=>x[0]==="b");
console.log(map1.size)

const mySet = new Set([1,2,3,4,4]);
mySet.add({a:1});
mySet.add({a:1});
console.log(mySet);
console.log(mySet.size);
console.log(mySet.has(2));

var date1;
console.log(typeof(date1))

var user1 = {
  name:"",
  pwd:""
}
var x1 = Object.create(user1,{
  
});
var x2 = Object.create(user1);

console.log(x1.__proto__ == x2.__proto__)
  









