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
import { NewTransaction } from '../pages/Main/NewTransaction';
import { Transaction } from '../pages/Main/Transaction';



export const AppRouter = (props) => {

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={GetStarted} 
                        />

                        <Route path="/login" exact component={Login} 
                        />

                        <Route path="/register" exact component={Register} 
                        />

                        <Route path="/main" exact component={() => <Main trans={props.trans} />}
                        />

                        <Route path="/newtransaction" 
                        exact component={() => <NewTransaction saveConsult={props.saveConsult} />} 
                        />

                        <Route path="/transaction/:id" exat
                        render={(props) => {
                            console.log(props);

                            return (
                                <Transaction />
                            )
                        }}
                        />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}