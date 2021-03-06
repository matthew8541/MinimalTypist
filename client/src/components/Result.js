import React, { useEffect } from 'react'
import { Button } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { changeGameStatus, resetTimer, setTotalWords } from '../store/slices/counterSlice';
import { updateRecordAction } from '../store/actions/profileActions';
import { TIME } from '../constants/gameStatus';

const Result = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const id = useSelector(state => state.auth.id);
  const totalWords = useSelector(state => state.counter.totalWords);
  const correctWords = useSelector(state => state.counter.correctWords);

  const dispatch = useDispatch();

  const date = new Date();
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

  useEffect(() => {
    document.body.addEventListener('keydown', keyRestart);

    if (isLogin) {
      const newRecord = {
        wpm: Math.floor(totalWords / (TIME / 60)),
        accuracy: Math.floor(100 * correctWords / totalWords),
        date: `${month + 1}/${day}/${year}` // the month is 0-indexed
      };

      updateRecordAction(id, newRecord);
    }

    return () => document.body.removeEventListener("keydown", keyRestart);
    // eslint-disable-next-line
  }, [])

  const restartHandler = () => {
    dispatch(resetTimer());
    dispatch(changeGameStatus({ type: "start" }));
    dispatch(setTotalWords({ amount: 0 }));
  }

  const keyRestart = (event) => {
    if (event.keyCode === 13) { // enter key
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