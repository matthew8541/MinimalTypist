// import classes from "./Intro.module.css"
import React, { useEffect } from 'react'
import classes from "./Intro.module.css"

const Intro = () => {
  useEffect(() => {
    // document.body.style.backgroundColor = "#292D33"
  }, [])
  
  return (
    <div className={classes.intro}>
      <h1 className="centered">Welcome to MinimalTypist</h1>
      <h3 className="centered">Enjoy the minimalistic typing environment</h3>
    </div>
  );
};

export default Intro;
