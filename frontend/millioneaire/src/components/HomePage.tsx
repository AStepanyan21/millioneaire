import React from 'react';
import {NavLink} from "react-router-dom";
import {inject, observer} from "mobx-react";

import '../styles/home_page.css'


@inject("quizzesStore")
@observer
export default class HomePage extends React.Component<any, typeof HomePage> {
    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        await this.props.quizzesStore.getQuzzes()
    }

    clickOnStart = () => {
        this.props.quizzesStore.getRandomQuizzes()
    }

    render() {
        return (
            <div className="container">
                <div className="col justify-content-evenly">
                    <div className="row justify-content-evenly top">
                        <NavLink to={'quiz'} onClick={this.clickOnStart}>
                            <button type="button" className="btn btn-primary">
                                Start game
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
