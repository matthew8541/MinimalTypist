import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { changeGameStatus, incrementTotalWords, incrementCorrectWords, resetTimer } from '../store/counterSlice';
import { vocab } from "../constants/vocabulary";
import { START, PROGRESS } from "../constants/gameStatus";
import { NEW, HIGHLIGHTED, HIGHLIGHTEDERROR, CORRECT, WRONG } from '../constants/vocabStatus';
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
  const [input, setInput] = useState(""); // the current input on the screen
  const [currentWords, setCurrentWords] = useState([]); // the first line of the words
  const [nextWords, setNextWords] = useState([]); // the second line of the words
  const [currentIndex, setCurrentIndex] = useState(0); // the current index pointing at the word in the first line

  /**###############
   *    Redux
   ################*/
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.counter.timer);
  const gameStatus = useSelector((state) => state.counter.gameStatus);

  const materialStyles = useStyles(); // material-ui styles 

  /**#########################
   *          LifeCycle
   ###########################*/
  // componentdidmount
  useEffect(() => {
    setCurrentWords(getNewWords());
    setNextWords(getNewWords());
  }, [])

  // check whether the current input === current word
  // --> Change the hightlighting styles
  useEffect(() => {
    if (input && !compareInput()) {
      highlightWord(HIGHLIGHTEDERROR);
    } else {
      highlightWord(HIGHLIGHTED);
    }
  }, [input])

  // When current word is changed or new words are generated
  useEffect(() => {
    setCurrentIndex(currentIndex);
  }, [currentWords, currentIndex]);

  useEffect(() => {
    highlightWord(HIGHLIGHTED);
  }, [currentIndex, nextWords]);


  /**##########################
   *  Typing Helper Functions
   ############################*/
  const getNewWords = () => {
    const newWords = []
    for (let i = 0; i < 10; i++) {
      const randomWord = vocab[Math.floor(Math.random() * vocab.length)];
      newWords.push({
        word: randomWord,
        status: NEW
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

  const validateCurrentWord = () => {
    const newCurrentWords = [...currentWords];
    if (currentWords[currentIndex].word === input.trim()) {
      newCurrentWords[currentIndex].status = CORRECT;
      dispatch(incrementCorrectWords());
    }
    else {
      newCurrentWords[currentIndex].status = WRONG;
    }
    setCurrentWords(newCurrentWords);
  };

  const nextWord = () => {
    validateCurrentWord();
    if (currentIndex === currentWords.length - 1) {
      setCurrentIndex(0);
      setCurrentWords(nextWords); // update the current line on with the next one
      setNextWords(getNewWords()); // create a new line
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const highlightWord = (style) => {
    const newCurrentWords = [...currentWords];
    if (newCurrentWords.length) {
      newCurrentWords[currentIndex].status = style;
      setCurrentWords(newCurrentWords);
    }
  }

  const compareInput = () => {
    const currWord = currentWords[currentIndex].word;
    return currWord.substring(0, input.length) === input;
  };

  /**#########################
   *      Action Handlers
   ###########################*/
  const inputUpdateHandler = (event) => {
    setInput(event.target.value.trim());
  }

  const keyPressHandler = (event) => {
    if (gameStatus === START) {
      dispatch(changeGameStatus({ type: PROGRESS }))
    }
    // make sure the input is not blanks
    if (event.key === " " && input.trim().length) {
      nextWord();
      dispatch(incrementTotalWords());
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
          autoComplete="off"
          autoFocus
          id="filled-basic"
          // error={!!input && !compareInput()}
          InputProps={{ className: materialStyles.textField_Input }}
          onChange={inputUpdateHandler}
          onKeyPress={keyPressHandler}
          value={input}
        >
        </TextField>
      </div>
      <Button variant="contained" color="primary" onClick={() => {
        dispatch(resetTimer())
        setCurrentWords(getNewWords());
        setNextWords(getNewWords());
      }}>Refresh</Button>
    </div>
  );
}

export default TypingArea;