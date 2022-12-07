import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styles from "./App.module.scss"
import PhoneCards from "./components/Phone/phoneCards/PhoneCards";
import Category from "./components/categories/Category";

function App() {
  return (
    <div className={styles.App}>
       <Header/>
       <Category/>
       <PhoneCards/>
       <Footer/>
    </div>
  );
}

export default App;
