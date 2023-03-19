import './App.css';
import { useEffect, useState } from 'react';
//optimized timer componet 

//note : no need of taking dependacy as time 
//because we are not exporting the time here from
//any parent component 

function App() {

  const [time, setTime] = useState(0);
  const delay = 1000; // milliseconds

  useEffect(() => {
   let id = setInterval(() => {
    setTime((prev) => prev + 1);
    }, delay);

    return () => clearInterval(id);

  }, []);

  return (
    <div className="App">
      {`hr ${Math.floor(time/3600)} : min ${Math.floor((time%3600)/60)} : sec ${time%60}`}
    </div>
  );
}

export default App;