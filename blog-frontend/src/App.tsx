import Homepage from "./components/home/Homepage";
import Header from "./components/header/header"; 
import Footer from "./components/home/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/blogs/Blogs";
import Auth from "./components/auth/auth";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn = useSelector((state:any)=>state.isLoggedIn) 
  console.log(isLoggedIn);
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
