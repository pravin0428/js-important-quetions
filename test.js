//practice quetions on javascript

//QUE:1)=> lets understand OOPS (object oriented programming)
  /*
  what is OOPs(object-oriented-programming)
  this first concept is use in only java,python,c++,c#
  1- it the programming fasion or paradigm or way 
     which mainly bsed on concept of object

  2- the main idea behind the oops is to create an 
     reusable code that can be easially maintained , 
     modified and extend or expand 
   
  3- there are four pillers or core concept of oops which 
     helps us to achive this 
      
      a)-Encapsulation, 
      b)-Inheritance, 
      c)-Polymorphism,
      d)-Abstraction

         a)-Encapsulation:=> it is the method or way in 
         which we group the data or instruction
         into an single unit called class ,This class 
         can then be used to create objects that 
         encapsulate the data and methods within it.
         
        ****this is same as we crete an fuction in 
         react**** 

         b)-Inheritance:=> Inheritance is the process 
         by which one class acquires the properties 
         (methods and variables) of another class. 
         It helps in creating a hierarchy of classes 
         that share common characteristics.

         ..like interms of functional programming one
         function copy the behaviour of other function..


        c)-Polymorphism:=> Polymorphism allows objects
        of different classes to be treated as if they 
        were objects of the same class. 
        It enables the same method to be used for 
        objects of different types.

        d)-Abstraction:=> Abstraction is the practice
         of hiding the implementation details of a 
         system and showing only the necessary details 
         to the user. This helps in reducing complexity 
         and making the system easier to use.

        ****abstraction is like backend****
  */

        // # Javascript questions

         /* 1) - undefined 
         
             in javascript the undefined meance the value is
             not defined 
             it is a premative value that is automatically assigned to 
             a variable that is declared but not assign value 
         
             for expample if we declared an variable like 

             var x

             console.log(x) --> this will give undefined

             this meance that the variable is declared 
             but it not hava an a value

             "NOTE": It is important to note that "undefined" 
             is a distinct value from "null", which is a 
             deliberate assignment of no value. In other words, 
             "undefined" means that a value has not been assigned,
             while "null" means that a value has been 
             intentionally set to no value.

         */  
            
            
         /*- NaN
         
         the term NaN in js is (Not a Number)
         it meance that is it represent a value that is
         notrepresentable or undefined 

         for exple if in mathematial operation if you 
         tring to add a value that is not a number
         then we will get the and NaN

         like this ---->
         console.log(Math.abs(("abc"+123)/3)) ----> NaN 

         or
            console.log(0/0) --> NaN
            console.log(1/0) --> infinity

         */  
            
         /*  == 
         the double equal to operater just check an value
         like  console.log(1==1);  ------->   true
              console.log([] == []); -------> false
              beacuse the array are in different memory 
              location therefore they will not equals

            console.log([] == []); // false
            console.log([] == ''); // true
            console.log([] == 0); // true
            console.log([] == false); // true

         */  
        
             
             
        // - && || operators and short-circuiting
            // console.log(1 && 2 && 3) --> 3
             // console.log(1 || 2 || 3) --> 1
           console.log(9||"abc" || 0 && 4|| NaN && 5);
                 // t  && t ||  t

       /*  functions
         In JavaScript, a function is a block of code
          that performs a specific task or set of tasks. 
          
          example 
                    this is function name
                    ^
                    ^
          function greet(name) {   // name is prameter
           console.log("Hello, " + name + "!");
          }

          greet("pravin") // function call

        additional info : we can also return value 


          */   
            
        // - arrays
            
            
        // - objects
            
            
        // - hoisting
            
            
        // - scoping
            
            
        // - promises
            
            
        // - var let const
            
            
       /*
       - arrow functions, this, call, apply, bind
          
       Arrow functions are a concise syntax for writing 
       anonymous functions in JavaScript. 
       They use the => operator to separate the 
       function parameters from the function body. 
       Here's an example:
 
        const add = (a, b) => {
        return a + b;
        };
        
In JavaScript, this is a special keyword that refers to
the object that the function is a method of, or the
global object if the function is not a method of any 
object. Arrow functions, however, do not bind their
own this value. Instead, they inherit the this value 
from the enclosing lexical scope.

The call(), apply(), and bind() methods are used 
to set the this value of a function, and to pass 
arguments to the function. The call() and apply() 
methods are similar, but they differ in the way that 
they pass arguments to the function. The call() method
 accepts arguments as a comma-separated list, while the
  apply() method accepts an array of arguments. Here's 
  an example:

 
const person = {
  name: 'John',
  sayHi: function() {
    console.log(`Hi, my name is ${this.name}`);
  }
};

const person2 = {
  name: 'Jane'
};

person.sayHi();   // logs "Hi, my name is John"

// using call()
person.sayHi.call(person2);   // logs "Hi, my name is Jane"

// using apply()
person.sayHi.apply(person2);   // logs "Hi, my name is Jane"

// using bind()
const sayHi = person.sayHi.bind(person2);
sayHi();    // logs "Hi, my name is Jane"

In this example, the person object has 
a sayHi() method that logs a message using the this
keyword to access the name property of the object. 
The person2 object has a name property, but it does
not have a sayHi() method. We can use the call(), apply(), and bind() methods 
to set the this value of the sayHi() method to the
person2 object, so that it logs the message with the 
name property of person2.

Note that arrow functions cannot be used 
with the call(), apply(), and bind() methods, since 
they do not have their own this value to bind.

       */  
            
            
        // - prototypes
            
            
            
        // - classes
            
            
        // - bigint
            
            
       /* event loop : 
       event loop basically meance the whole working of 
       javascript code 

        there are some important section thought which js code 
        generally go through
   1)call stack
   2)online api
   3)task queque
   

       */  
            
            
        // - `this` keyword explained in short
            
            
        // - Object methods defineProperty, hasOwnProperty
            
            
         /*  fetch vs axios
           fetch                        axios
           1)
         */  
            
            
        // - SetTimeout - Amazon question Approach 1
            
        //     This has one more approach given in the closures page
            
            
      /* strict mode : 
      strict mode does the strict checking of our js code and 
      give us priore warning and error so that we can maintain and debug
      error in intial time

     for example
      
fuction here(){
console.log(this)
}

here()
//the output will be the construction or whole prototype object

but if we use strictmode

'use strict'
fuction here(){
console.log(this)
}

here()

//the output will be the undefined


      */  
            
            
        // - Recursion vs Iterative approach problem
            
            
        // - DOM, Event propogation
            
            
        // - IIFE
            
            
        // - create your own array object with prototype chain
            
            
        // - What is mutability and immutability?
        
        // - Can you describe the main difference between a `.forEach` 
        // loop and a `.map()` and why you would pick one versus the other?       


        // the second usecase is to access the dom element dorectlly
// lets see how can we achive this

import "./styles.css";
import { useRef, useState } from "react";
export default function App() {
  // const [state , setState] = useState("")

  const inputElem = useRef("");
  /*so here we are declaring the useRef 
   hook and to use or access the dom element directly.
   that meance the input elem in case of this expample
   
   will get the property called ref and we have to
   put in the element that we have to access like given in
   input elem. see there...
   */

  const handleInputs = () => {
    inputElem.current.style.backgroundColor = "green";
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter name"
        ref={inputElem}
        //so to access this elem we are doing this
        // ref = {variable name that we have declared while taking useRef hook}
      />
      <button onClick={handleInputs}>Submit</button>
    </div>
  );
}

/*
detailed explaination : in above code simply we have taken an
1) input element 
2)button 

now our task is whenever the button is clicked we have to
change the background color of input element.

so now for access the input elem we need to use useRef hook 
so we are importing it from react 
then to use it we need to declare an variable like given bellow 

const inputElem = useRef("")

  - then we need to put this variable in the element that we 
    want to access 
    so we have to access the input elem so we gone to 
    put the refvariable like given bellow

    ref = {inputElem}

then whenever user click on button we calling an callback 
function 

handleInputs

then in handleInput function we can use access the out input elem
because in our input we alredy provided the ref property
see line : 31

so in handle input by using the  
 inputElem.current.style.backgroundColor= "green"= "green"
we can actually get access of elem 

so ues   : 
  inputElem.current.style.backgroundColor 
 
  to access the elem 
  current bacically the referance to perticular elem

  that's set here is out purpose done using the useRef hook


*/

//vowel web interview quetions

/* 
1)make a server without using express library
 
 --so for making the server without express we can
 make it using http module 

  so lets code:

  const http = require("http")
  
  const server = http.createServer(req , res) =>{
    
    res.status = 200
    res.headers('Content-Type': 'text/plain')
    res.end("hello")

  }

  server.listen(3000 , () => {
    console.log(`listning on http://localhost:3000`)
  })

*/


//addeing new data 



 
