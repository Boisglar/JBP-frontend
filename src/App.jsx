import { useState } from 'react';
import style from './App.scss'
import Header from "./components/header/Header";
import CompareButton from './components/Phone/Compare/CompareButton';
import PhoneCards from "./components/Phone/phoneCards/PhoneCards";

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <PhoneCards/>
      <CompareButton/>
    </div>
  );
}

export default App;
