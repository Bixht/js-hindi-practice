// Primitive

// 7 Types Of Primitive //

// N,N,B,B,S,S,U //This is the short form of Primitives
// Null, Number, Boolean, BigInt, String, Symbol, Undefined //

const score = 800           //-------------------
                                              //|---Number                
const scoreValue = 800.8    //-------------------

const loggedIn = true       //-------------------Boolean
const indoreTemp = null     //-------------------Null
let myEmail;                //-------------------Undefined

const id = Symbol('888')    //------------------
                                         //    | Symbol
const newId = Symbol('888') //------------------

console.log(id === newId);

const bigNumm = 88888888888n  //----------------BigInt

// (Non Primitive Datatypes)

//Array, Objects, Functions

const superBootie = ["dalchini", "tejpatta", "kadhipatta"];
let bioData = {
    name : "bisht",
    age : 22,
}
console.log(typeof age);


const kachraSeth = function(){
    console.log("Hello Raju");
}

console.log(typeof kachraSeth);


//+++++++++++++++++++++++++++++++++++++++++++//

                    //    Memory     //
// Stack (primitive), Heap (Non-Primitive)

let thisCriminal = "Bisht"

let thatCriminal = thisCriminal 
thatCriminal="Bistro"


console.log(thatCriminal);
console.log(thisCriminal);

let vodafone = {
    network:"wrost",
    email:"lodafone@cc.com"
}

let vodaloan = vodafone

user.email = "vodaloan@ccc.com"

console.log(vodafone.email);
console.log(vodalone.email);
