/* some background : 
Code-Splitting
Bundling
Most React apps will have their files “bundled” 
using tools like Webpack, Rollup or Browserify. 
Bundling is the process of following imported
files and merging them into a single
file: a “bundle”. This bundle can then be 
included on a webpage to load an entire app
at once.
*/

/* bundling is greate but as application grow 
bundles are also get bigger so for handle such case
we can use lazy loading 
*/

// import Home from "./Components/Home";
// import Main from "./Components/Main";
import "./styles.css";
import React, { lazy, Suspense } from "react";
/* step 1) import lazy and Suspence from react */
const Home = lazy(() => import("./Components/Home"));
const Main = lazy(() => import("./Components/Main"));
/* step 2) Note : so for use the lazy lading we just have to
change the way of importing the componet like i 
have imported in line 5(The home component)
*/

export default function App() {
  return (
    <div className="App">
      <h2>i am first</h2>
      <h2>i am first</h2>
      <h2>i am first</h2>
      <h2>i am first</h2>
      <Suspense fallback={<div>loading...</div>}>
        <Home />
      </Suspense>
      {/* step 3) just wrap the component in Suspense and 
    put sume message in fallback so it will show first and
    then componet will be show */}

      <Suspense fallback={<div>loading second componet with lazy...</div>}>
        <Main />
      </Suspense>
    </div>
  );
}

/* so thas all about the lazy loading in react.js

why we use it? we use the lazy loading to improve 
our app performance 

how it improve performance ? so as our app grows
the ammount of code in the component also get 
increse so this will take more time to load our app

- so by putting some part in lazy loading we actualy
can reduce the ammount of code that will run in initial
time in that way we just load the content that is 
neccesory in first render or in initial phase 
and after that will load the othe code so it will
improve the costomer experiance as well as our app 
performance 


--- little bit about fallback ---
The fallback prop accepts any React elements that
you want to render while waiting for the 
component to load. You can place the Suspense 
component anywhere above the lazy component. 
You can even wrap multiple lazy components with
a single Suspense component.

*/

/* 
additional 
Route-based code splitting
just Wrap the routed that we want to load lazy
*/
