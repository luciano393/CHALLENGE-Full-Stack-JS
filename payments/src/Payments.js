import React from "react";
import './styles/styles.scss';
import { ButtonComponent } from "./components/Button/ButtonComponent";
import { SubTitle, Title } from "./components/Titles/Title";
import { Input } from "./components/Inputs/Input";
import { Transaction } from "./components/Transactions/Transaction";

function App() {
  return (
    <div className="App">
      <Title title="Payments"/>
      <SubTitle title="Welcome to Payments" />
      <ButtonComponent text="Get Started"/>
      <Input text="User"/>
      <Transaction />
    </div>
  );
}

export default App;
