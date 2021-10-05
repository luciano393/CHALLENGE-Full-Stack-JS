import React, { useEffect, useState }  from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { GetStarted } from '../pages/Main/GetStarted';
import { Main } from '../pages/Main/Main';
import { NewTransaction } from '../pages/Main/NewTransaction';
import { Transaction } from '../pages/Main/Transaction';
import clienteAxios from "../config/axios";



export const AppRouter = () => {
    const [trans, saveTrans] = useState([]);
    const [consult, saveConsult] = useState(true);

    useEffect( () => {
        if(consult) {
            const consultarAPI = () => {
                clienteAxios.get('/presupuesto')
                    .then(res => {
                        saveTrans(res.data)
                         
                        saveConsult(false);
                    })
                    .catch(err => {
                    console.log(err)
                    })
                }
            consultarAPI();
        }
    }, [consult] );
  
    
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={GetStarted} 
                        />

                        <Route path="/main" exact component={() => <Main trans={trans} />}
                        />

                        <Route path="/newtransaction" 
                        exact component={() => <NewTransaction saveConsult={saveConsult} />} 
                        />

                        <Route path="/transaction/:id" exact
                        render={(props) => {
                            const transaction = trans.filter(transaction => transaction._id === props.match.params.id)

                            return (
                                <Transaction 
                                saveConsult={saveConsult}   
                                transaction={transaction[0]}  
                                />
                            )
                        }}
                        />

                    </Switch>
                </div>
            </Router>
        </div>
    )
}