import React from 'react';

import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage"
import Quiz from "./components/Quiz";

function App() {

    return (
        <div>
            <Switch>
                <Route path="/quiz/" component={Quiz}/>
                {/*// @ts-ignore*/}
                <Route path="/" exact={true} component={HomePage}/>
                <Redirect to={"/"}/>
            </Switch>
        </div>
    );
}

export default App;
