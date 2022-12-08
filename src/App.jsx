
import { useState } from 'react';
import style from './App.scss'
import Header from "./components/header/Header";
import CompareButton from './components/Phone/Compare/CompareButton';
import PhoneCards from "./components/Phone/phoneCards/PhoneCards";
import Category from "./components/categories/Category";
import Footer from "./components/footer/Footer";
import { Routes, Route, Link } from 'react-router-dom';
import styles from "./App.scss"
import About from "./components/about/About";
import BlankPage from './components/blankPage/BlankPage';




function App() {
  return (
    <div className={styles.App}>
       <Header/>
       <Routes>
        <Route path='/products' element = {<Category/>}/>
        <Route path='/about' element = {<About/>} />
        <Route path='/noPage' element = {<BlankPage/>} />
       </Routes>
       <Footer/>
    </div>
  );
}


export default App;
