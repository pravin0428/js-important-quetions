
//second usecase of useRef hook

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