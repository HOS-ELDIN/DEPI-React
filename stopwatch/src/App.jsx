// import { useEffect, useState } from "react";
// import useAxios from "./hooks/useAxios";
// import useFetch from "./hooks/useFetch";

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


function App() {
  const [count , setCount] = useState(0);
  const timerIdRef = useRef(0);
  
  const startHandler = () => {
      if(timerIdRef.current) return ;
      timerIdRef.current = setInterval(() => setCount(c => c + 1) , 1000)
  }

  const stopHandler = () => {
    clearInterval(timerIdRef.current)
    timerIdRef.current = 0
  }

  useEffect(() => {
    return () => {
      clearInterval(timerIdRef.current)
    }
  } , [])
  return ( 
    <>
      <div>
        <button onClick={startHandler}>Start Counter</button>
        <button onClick={stopHandler}>Stop Counter</button>
        <h2>Timer : {count} second/s</h2>
      </div>
    </>
   );
}

export default App;