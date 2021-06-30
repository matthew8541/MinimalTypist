import React, { useEffect, useState } from 'react'
import "./Home.css"
import TypingArea from '../components/TypingArea';



const Home = () => {

  return (
    <div className="centered">
      <div>
        {/* <h1 className="centered">Home Page</h1> */}
      </div>
      <TypingArea />
    </div>
  );
};

export default Home;

