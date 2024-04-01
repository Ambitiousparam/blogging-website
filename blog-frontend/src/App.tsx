import Homepage from "./components/home/Homepage";
import Header from "./components/header/header"; 
import Footer from "./components/home/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/blogs/Blogs";
import Auth from "./components/auth/auth";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/auth-slice";
import AddBlog from "./components/blogs/AddBlog";
import Profile from "./components/header/user/Profile";
import Viewblog from "./components/blogs/Viewblog";
import { Toaster } from "react-hot-toast";
import Updateblog from "./components/blogs/Updateblog";
import Notfound from "./components/Notfound";


function App() {
  const dispatch = useDispatch();
  const isLoggedIn:boolean= useSelector((state:any)=>state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(()=>{
const data:string =localStorage.getItem("userdata") as string;
if(JSON.parse(data)!==null){
  dispatch(authActions.login());

}
  },);
 
  return (
    <div className="wrapper">  
      <Toaster/>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path = "/"  element = {<Homepage/>} />
          <Route path = "/blogs"  element = {<Blogs/>} />
          <Route path = "/auth"  element = {<Auth/>} />
          {(isLoggedIn && <Route path = "/addblog"  element = {<AddBlog/>} />)}
          <Route path = "/profile"  element = {<Profile/>} />
          <Route path = "/blog/view/:id" element = {<Viewblog />}/>
          {(isLoggedIn && <Route path = "/blog/update/:id" element = {<Updateblog />}/>)}{" "}
          <Route path = "*" element = {<Notfound/>}/>

        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
