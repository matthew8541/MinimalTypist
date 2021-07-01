import React, { useState, useEffect } from 'react'
import TypingArea from '../components/TypingArea';
import Result from "../components/Result"
import { useSelector, useDispatch } from 'react-redux';
import { tictok, changeGameStatus } from '../store/counterSlice';
import "./Home.css"



const Home = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.counter.timer);
  // const totalWords = useSelector((state) => state.counter.totalWords);
  const gameStatus = useSelector((state) => state.counter.gameStatus);

  useEffect(() => {
    console.log("home useEffect")
    let interval = null;
    if (gameStatus === "over") clearInterval(interval);
    else if (timer <= 0) dispatch(changeGameStatus({ type: "over" }));
    else if (gameStatus === "progress") {
      interval = setInterval(() => {
        dispatch(tictok());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, gameStatus]);

  return (
    <div className="centered">
      {gameStatus !== "over" && <TypingArea />}
      {gameStatus === "over" && <Result />}
    </div>
  );
};

export default Home;

