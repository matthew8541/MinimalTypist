import React from 'react'
import { Button } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import {  changeGameStatus, resetTimer, setTotalWords } from '../store/counterSlice';

const Result = () => {

  const dispatch = useDispatch();
  const totalWords = useSelector((state) => state.counter.totalWords);

  return (
    <div>
      <h1 className="centered">Result</h1>
      <h2 className="centered">{`Total Words: ${totalWords}`}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(resetTimer());
          dispatch(changeGameStatus({type: "start"}));
          dispatch(setTotalWords({amount: 0}));
        }}>
        Restart
      </Button>
    </div>
  );
}

export default Result;