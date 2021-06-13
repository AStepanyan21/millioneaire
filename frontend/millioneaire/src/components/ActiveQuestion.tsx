import React from "react";
import AnswerItem from "./AnswersItem";
import {quizType} from "../core/settings/types";


type ActiveQuestionType ={
    quiz: quizType
    trueClick: any
    click: any
    game_points:number
}
//@ts-ignore
const ActiveQuestion = ({quiz, trueClick, click, game_points})  => {
    return (
        <div className="card-body">
            <h5 className="card-title">Your points is {game_points}</h5>
            {/*//@ts-ignore*/}
            <p className="card-text">{quiz.question}</p>
            {
                //@ts-ignore
                quiz.answers.map((answer, index) => {
                    return (
                        <AnswerItem
                            trueClick={trueClick}
                            click={click}
                            answer={answer}
                            key={index}
                        />)

                })}
        </div>
    )
}

export default ActiveQuestion
