import classes from "./Home.module.css"
import React, { useEffect } from 'react'


const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#fff"
  }, [])

  return (
    <div>
      <h1 className="centered">Home Page</h1>
    </div>
  );
};

export default Home;