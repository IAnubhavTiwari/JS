// primitive (In it , Call by value is used(means in it the copy of data is sended))

// 7 types : string, number, null, undefined, big int, symbol, boolean

const name= "Anubhav";
const age="19";

const currentTemperature = null;

let anythingg; // undefined

// let money = 898989898989898989; bigInt

const id = Symbol('123')
const anotherId = Symbol('123')

let isLoggedIn = false;





// Non primitive (Call by reference)

// 3 types : Array, Objects, Functions

let Husbandos = ["Luffy","Naruto","Asta","Ichigo","Goku"];
console.log(Husbandos);

let luffy = {
    anime : "One Piece"
}

let myFunction = function(){
    console.log("Anubhav");
}

myFunction();

/* Datatypes and their return type

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

       */

       // ************************************************** //

       /* Types of memory = Stack and Heap

       stack = primitive and heap = non-primitive */

// example of stack
       let myGmail = "Anubhavtiwari@gmail.com";
       let newGmail = myGmail;
       newGmail = "Anubhavtiwari@google.com";

       console.log(myGmail);
       console.log(newGmail);

       // example of heap

       let userOne = {
        upiID: "tiwarianubhav@fam",
        userEmail: "Anubhavtiwari@google.com"
       }

       let userTwo = userOne;

       userTwo.userEmail= "AnubhavTiwari@gmail.com";

       console.log(userOne);
       console.log(userTwo);

