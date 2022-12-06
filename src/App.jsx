
import { useState } from 'react';
import style from './App.scss'
import Header from "./components/header/Header";
import CompareButton from './components/Phone/Compare/CompareButton';
import PhoneCards from "./components/Phone/phoneCards/PhoneCards";
import Category from "./components/categories/Category";
import Footer from "./components/footer/Footer";

import styles from "./App.scss"
import About from "./components/about/About";



function App() {
  return (
    <div className={styles.App}>
       <Header/>
       {/* <About/> */}
       <Footer/>
    </div>
  );
}


export default App;
