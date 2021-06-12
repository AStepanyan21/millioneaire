import React, {useState, useEffect} from 'react';
import AnswerItem from "./AnswersItem";


function Quiz() {

    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        //@ts-ignore
        fetch('http://127.0.0.1:8000/api/v1/quizzes/2')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setQuizzes(data)
                console.log(data);
            });
    })
    return (
        <div className="card text-center">
            <div className="card-header">
                Questions
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/*{   //@ts-ignore*/}
                {/*    quizzes.answers.map((answer, index) => {*/}
                {/*    return (*/}
                {/*        <AnswerItem*/}
                {/*            answer={answer}*/}
                {/*            key={index}*/}
                {/*        />)*/}
                {/*})}*/}
            </div>
        </div>

    );
}

export default Quiz;
