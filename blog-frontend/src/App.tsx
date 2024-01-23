import Homepage from "./components/home/Homepage";
import Header from "./components/header/header"; 
import Footer from "./components/home/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/blogs/blogs";
import Auth from "./components/auth/auth";

function App() {
  return (
    <div >
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path = "/"  element = {<Homepage/>} />
          <Route path = "/blogs"  element = {<Blogs/>} />
          <Route path = "/auth"  element = {<Auth/>} />


        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
