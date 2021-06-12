import React from 'react';
import {NavLink} from "react-router-dom";

import '../styles/home_page.css'


function HomePage() {
    return (
        <div className="container">
            <div className="col justify-content-evenly">
                <div className="row justify-content-evenly top">
                    <NavLink to={'quiz'}>
                        <button type="button" className="btn btn-primary">
                            Start game
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
