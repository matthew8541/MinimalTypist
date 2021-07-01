import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { changeGameStatus, incrementTotalWords} from '../store/counterSlice';
import { vocab } from "../constants/vocabulary";
import "./TypingArea.css";

const useStyles = makeStyles({
  textField_Input: {
    color: "white",
    alignSelf: "center",
    fontSize: 24,
    margin: '30px 30px'
  },
  button: {

  }
})

const TypingArea = () => {
  const [input, setInput] = useState("");
  const [currentWords, setCurrentWords] = useState([]);
  const [nextWords, setNextWords] = useState([]);

  const dispatch = useDispatch();
  const timer = useSelector((state) => state.counter.timer);
  const totalWords = useSelector((state) => state.counter.totalWords);
  const gameStatus = useSelector((state) => state.counter.gameStatus);

  const materialStyles = useStyles();

  // componentdidmount
  useEffect(() => {
    setCurrentWords(getNewWords());
    setNextWords(getNewWords());
  }, [])

  /**##########################
   *  Typing Helper Functions
   ############################*/
  const getNewWords = () => {
    const newWords = []
    for (let i = 0; i < 10; i++) {
      const randomWord = vocab[Math.floor(Math.random() * vocab.length)];
      newWords.push({
        word: randomWord,
        status: "new"
      });
    }
    return newWords;
  }

  const showWords = (words) => {
    return words.map((current, index) => {
      const { word, status } = current;
      return <span key={index} className={`word ${status}`}>{word}</span>;
    });
  }

  /**#########################
   *      Action Handlers
   ###########################*/
  const inputUpdateHandler = (event) => {
    setInput(event.target.value.trim());
  }

  const keyPressHandler = (event) => {
    if (gameStatus === "start") {
      dispatch(changeGameStatus({type: "progress"}))
    }
    if (event.key === " ") {
      dispatch(incrementTotalWords())
      setInput("");
    }
  }

  return (
    <div>
      <h1>{timer}</h1>
      <div>
        <Grid>{showWords(currentWords)}</Grid>
        <Grid>{showWords(nextWords)}</Grid>
      </div>
      <div className="typing">
        <TextField
          autoFocus
          id="filled-basic"
          InputProps={{ className: materialStyles.textField_Input }}
          onChange={inputUpdateHandler}
          onKeyPress={keyPressHandler}
          value={input}
        >
        </TextField>
      </div>
      <Button variant="contained" color="primary" onClick={() => setInput("")}>Refresh</Button>
    </div>
  );
}

export default TypingArea;