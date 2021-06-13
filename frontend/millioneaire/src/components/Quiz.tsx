import React, {useState, useEffect} from 'react';
import ActiveQuestion from "./ActiveQuestion";


function Quiz() {

    const [quizzes, setQuizzes] = useState([])
    const [loadingAnswer, setLoadingAnswer] = useState(true)
    useEffect(() => {
        setLoadingAnswer(true)
        //@ts-ignore
        fetch('http://127.0.0.1:8000/api/v1/quizzes/2')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setQuizzes(data)
                setLoadingAnswer(false)
                console.log(data);
            });
    }, [])
    return (
        <div className="card text-center">
            <div className="card-header">
                Questions
            </div>
            <ActiveQuestion
                loading={loadingAnswer}
                quiz = {quizzes}
            />
        </div>

    );
}

export default Quiz;
