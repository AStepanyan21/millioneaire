import React from "react";
import AnswerItem from "./AnswersItem";
//@ts-ignore
const ActiveQuestion = ({loading, quiz}) => {
    return (
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            {/*//@ts-ignore*/}
            <p className="card-text">{quiz.question}</p>
            {
                !loading
                    ?
                    //@ts-ignore
                    quiz.answers.map((answer, index) => {
                        return (
                            <AnswerItem
                                answer={answer}
                                key={index}
                            />)

                    })
                    : null}
        </div>
    )
}

export default ActiveQuestion
