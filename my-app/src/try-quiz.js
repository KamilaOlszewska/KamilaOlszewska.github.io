import React, { useState,useEffect } from 'react';
import {number} from "prop-types";
// import { fetchQuizQuestions } from './API';

const TryQuiz =()=>{
    const [quizQuestion, setQuizQuestion]=useState([]);
    const [score,setScore]=useState(0)
    const [status,setStatus]=useState(0)
    useEffect(()=>{
        getQuizQuestion()

    },[]);
    const ansIsRight = (e)=>{
        e.preventDefault()
        setScore((prev)=> prev+1);
        setStatus((prev)=> prev+1);
        e.currentTarget.classList.add("right-answer");
    }
    const ansIsWrong=(e)=>{
        setStatus((prev)=> prev+1);
        e.currentTarget.classList.add("wrong-answer");
        console.log(e.currentTarget)
    }
    const getQuizQuestion = async () => {
        const url = `https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple`
        const res = await fetch(url);
        const resJson = await res.json();
        if (resJson.results) {
            setQuizQuestion(resJson.results);
        }
    }
    const questionStatus=()=>{
        if(status>10){
            return(
                <div>
                    <p>Odpowiedziałeś na wszystkie pytania! Twój wynik to: {score}</p>
                </div>
            )
        }
    }
    if (quizQuestion){

    return(
        <div className="score-whole-window">
            <div className="container">
            <div className="score-window box has-text-centered">
            <p>Score: {score}</p>
            </div>
            <div>

                {quizQuestion.map((el)=>{
                    return(
                        <div className="box">
                <p className="has-text-centered">{el.question}</p>
                <div className="is-flex is-flex-direction-column quiz-answer-buttons">
                <button
                    onClick={e=>ansIsRight(e)}
                   className="quiz-answer-button"
                >{el.correct_answer}
                </button>
                <button
                    className="quiz-answer-button"
                    onClick={e=>ansIsWrong(e)}
                >{el.incorrect_answers[0]}</button>
                <button
                    className="quiz-answer-button"
                    onClick={e=>ansIsWrong(e)}>
                    {el.incorrect_answers[1]}</button>
                <button
                    className="quiz-answer-button"
                    onClick={e=>ansIsWrong(e)}>
                    {el.incorrect_answers[2]}</button>

                        </div>{questionStatus()}</div>
                )
                })}
            </div>
        </div>
        </div>

    )

}}
export default TryQuiz;