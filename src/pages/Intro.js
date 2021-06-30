import classes from "./Intro.module.css"
import React, { useEffect } from 'react'

const Intro = () => {
  useEffect(() => {
    // document.body.style.backgroundColor = "#292D33"
  }, [])
  
  return (
    <div>
      <h1 className="centered">Intro Page</h1>
    </div>
  );
};

export default Intro;
