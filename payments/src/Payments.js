import React, { useEffect, useState }  from "react";
import clienteAxios from "./config/axios";
import { AppRouter } from "./routers/AppRouter";
import './styles/styles.scss';

function App() {
  // State de la app
  const [transactions, saveTransactions] = useState([]);
  const [consult, saveConsult] = useState(true);

  useEffect( () => {
      if(consult) {
          const consultarAPI = () => {
              clienteAxios.get('/presupuesto')
                  .then(res => {
                      // colocar en el state resultados
                      saveTransactions(res.data)
                          
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
    <div className="App">
      <AppRouter saveConsult={saveConsult} trans={transactions}/>
    </div>
  );
}

export default App;
