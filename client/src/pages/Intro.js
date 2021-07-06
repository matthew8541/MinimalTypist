// import classes from "./Intro.module.css"
import React, { useEffect } from 'react'
import classes from "./Intro.module.css"
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Intro = () => {
  useEffect(() => {
    document.body.className = "intro-body";
    return () => {
      document.body.className = "body";
    }
  }, [])

  return (
    <div className={`${classes.intro} centered`}>
      <h1>Welcome to MinimalTypist</h1>
      <h3>Enjoy the minimalistic typing environment</h3>
      <Button
        variant="contained"
        color="inherit"
      >
        <NavLink to="/home" style={{
          textDecoration: "none",
          color: "#000000"
        }}
        >
          Start Typing
        </NavLink>
      </Button>
    </div>
  );
};

export default Intro;
