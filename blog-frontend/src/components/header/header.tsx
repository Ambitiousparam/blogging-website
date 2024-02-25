import { AppBar, Box, Tab, Tabs, Toolbar,Button} from "@mui/material"
import { headerstyles } from "../../styles/header-styles";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import {Link,useNavigate} from"react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./user/UserMenu";
import Typography from "@mui/material/Typography";



const Header = () => {
  const navigate = useNavigate(); 
  const handleAddBlog = ()=>{
    navigate("/AddBlog")
  }
  const isLoggedIn =useSelector((state:any)=>state.isLoggedIn);
    const [value, setvalue] = useState(0);
  return (
    <AppBar sx = {headerstyles.appBar}>
        <Toolbar>
            <img  style ={{padding : "10px" ,height :"33px", width: "33px"}} src="blog1.png" alt="blog logo" />,
            <Box onClick ={handleAddBlog} sx ={headerstyles.addLink}>
               <Typography sx={{ fontFamily: 'Work Sans' }}>
                Post New Blog
                </Typography>
            </Box>


            
            <Box sx ={headerstyles.tabContainer}>
                <Tabs  textColor="inherit" 
                TabIndicatorProps={{style:{ backgroundColor:"white"}}}
                indicatorColor="primary" value = {value}
                onChange={(e,val)=>setvalue(val)}>
                    {/*@ts-ignore*/}
                    <Tab LinkComponent={Link} to ="/" disableRipple label="Home" />
                    {/*@ts-ignore*/}
                    <Tab LinkComponent={Link} to="/blogs" disableRipple label="Blogs" /> 
                </Tabs>
                  {/*@ts-ignore*/}
                {isLoggedIn ? <UserMenu/> : <Button  LinkComponent = {Link} to ="/auth"startIcon={<FaSignInAlt/>} sx ={headerstyles.authbtn}>Auth</Button>}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;