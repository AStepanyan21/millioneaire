import React from "react";
import {NavLink} from "react-router-dom";

type FinishPageType = {
    game_points: number
}
const FinishPage = (props: FinishPageType) => {
    return (
        <div className="container">
            <div className="col justify-content-evenly">
                <div className="row justify-content-evenly">
                    <div className="card w-50">
                        <div className="card-body">
                            <h5 className="card-title">Game Over</h5>
                            <p className="card-text"> Your points is {props.game_points}</p>
                            <button type="button" className="btn btn-primary">
                                <NavLink to={'/'}>
                                    <button type="button" className="btn btn-primary">
                                        Home page
                                    </button>
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishPage
