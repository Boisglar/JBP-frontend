import Header from "./components/header/Header";

// import Footer from "./components/footer/Footer";
import styles from "./App.module.scss"
import PhoneCards from "./components/Phone/phoneCards/PhoneCards";
import Category from "./components/categories/Category";
import Footer from "./components/footer/Footer";
import { Routes, Route,} from 'react-router-dom';
import About from "./components/about/About";
import BlankPage from './components/blankPage/BlankPage';




// import Category from "./components/categories/Category";
import Cart from "./components/Cart/Cart";
import ComparePhone from "./components/Phone/Compare/ComparePhone";


function App() {
  return (
    <div className={styles.App}>
       <Header/>
       <Routes>
        <Route path="/comparison" element = {< PhoneCards/>} />
        <Route path='/products' element = {<Category/>}/>
        <Route path='/about' element = {<About/>} />
        <Route path='/noPage' element = {<BlankPage/>} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
