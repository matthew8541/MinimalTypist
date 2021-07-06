import React, { useEffect } from 'react'
import { Button } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { changeGameStatus, resetTimer, setTotalWords } from '../store/slices/counterSlice';
import { TIME } from '../constants/gameStatus';

const Result = () => {

  const dispatch = useDispatch();
  const totalWords = useSelector((state) => state.counter.totalWords);
  const correctWords = useSelector((state) => state.counter.correctWords);

  useEffect(() => {
    document.body.addEventListener('keydown', keyRestart);

    return () => document.body.removeEventListener("keydown", keyRestart);
  }, [])

  const restartHandler = () => {
    dispatch(resetTimer());
    dispatch(changeGameStatus({ type: "start" }));
    dispatch(setTotalWords({ amount: 0 }));
  }

  const keyRestart = (event) => {
    if (event.key === " ") {
      restartHandler()
    }
  }

  return (
    <div>
      <h1 className="centered">Result</h1>
      <h2 className="centered">{`Speed: ${Math.floor(totalWords / (TIME / 60))} WPM`}</h2>
      <h2 className="centered">{`Accurary: ${Math.floor(100 * correctWords / totalWords)}%`}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={restartHandler}
      >
        Restart
      </Button>
    </div>
  );
}

export default Result;