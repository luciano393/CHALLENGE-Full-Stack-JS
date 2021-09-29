import React  from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { GetStarted } from '../pages/Main/GetStarted';
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';
import { Main } from '../pages/Main/Main';

export const AppRouter = (props) => {

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={GetStarted} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/main" exact component={Main}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}