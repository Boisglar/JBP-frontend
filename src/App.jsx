import style from './App.module.scss'
import Category from './components/categories/Category';
import Header from './components/header/Header';
import PhoneCards from "./components/Phone/phoneCards/PhoneCards";

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Category/>
      <PhoneCards/>
    </div>
  );
}

export default App;
