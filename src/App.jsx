

import Header from "./components/header/Header";
import Category from "./components/categories/Category";
import Footer from "./components/footer/Footer";
// import PostPhone from "./components/PostPhone";
// import PostPhone from "./components/PostPhone";

 import styles from "./App.scss"
import About from "./components/about/About";



function App() {
  return (
    <div className={styles.App}>
       <Header/>
       <About/>
       {/* <Category/> */}
      {/* <PhoneCards/> */}
      {/* <PostPhone/> */}
      {/* <PostPhone/> */}

    <div className="App">
     <Header/>
     <Category/>

     <Footer/>
    </div>
  );
}

export default App;
