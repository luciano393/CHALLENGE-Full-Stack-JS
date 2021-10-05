import React  from "react";
import { AppRouter } from "./routers/AppRouter";
import './styles/styles.scss';

import { Provider } from 'react-redux';
import generateStore from "./redux/store";

function App() {
  
  const store = generateStore();

  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
}

export default App;
