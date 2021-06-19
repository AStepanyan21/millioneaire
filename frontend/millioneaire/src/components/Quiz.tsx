import React from 'react';
import ActiveQuestion from "./ActiveQuestion";
import {inject, observer} from "mobx-react";
import FinishPage from "./FinishPage";

@inject("quizzesStore")
@observer
class Quiz extends React.Component<any, typeof Quiz> {
    constructor(props: any) {
        super(props);
    }


    render() {
        const {
            isFinished, loading,
            game_quizzes, active_quiz,
            trueClick, click,
            game_points, quizzes
        } = this.props.quizzesStore
        return (
            <div className="card text-center">
                <div className="card-header">
                    Questions
                </div>
                {
                    loading
                        ? null
                        :
                        !isFinished
                            ?
                            < ActiveQuestion
                                quiz={game_quizzes[active_quiz]}
                                trueClick={trueClick}
                                click={click}
                                game_points={game_points}
                            />

                            :
                            <FinishPage
                                game_points={this.props.quizzesStore.game_points}
                            />

                }
            </div>)
    }

}


export default Quiz;
