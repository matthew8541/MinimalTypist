import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { vocab } from "../constants/vocabulary";
import "./TypingArea.css";

const useStyles = makeStyles({
  textField_Input: {
    color: "white",
    alignSelf: "center",
    fontSize: 24
  },
  button: {
  }
})

const TypingArea = () => {
  const [input, setInput] = useState("");
  const [currentWords, setCurrentWords] = useState([]);
  const [nextWords, setNextWords] = useState([]);

  console.log(currentWords)

  const materialStyles = useStyles();
  useEffect(() => {
    setCurrentWords(getNewWords());
    setNextWords(getNewWords());
  }, [])

  const inputUpdateHandler = (event) => {
    console.log(event);
    setInput(event.target.value);
  }

  const getNewWords = () => {
    const newWords = []
    for (let i = 0; i < 10; i++) {
      const randomWord = vocab[Math.floor(Math.random() * vocab.length)];
      newWords.push({
        word: randomWord,
        status: "NEW"
      });
    }
    return newWords;
  }

  const printRow = (words) => {
    return words.map((current, index) => {
      const { word, status } = current;
      return <span key={index} className={`word ${status}`}>{word}</span>;
    });
  }

  return (
    <div className="grid">
      <Grid>{printRow(currentWords)}</Grid>
      <Grid>{printRow(nextWords)}</Grid>
      <div>
        <TextField
          id="filled-basic"
          InputProps={{ className: materialStyles.textField_Input }}
          onChange={inputUpdateHandler}
        >
        </TextField>
      </div>
      <div >
        <Button variant="contained" color="primary" onClick={() => setInput("")}>Refresh</Button>
      </div>
    </div>
  );
}

export default TypingArea;