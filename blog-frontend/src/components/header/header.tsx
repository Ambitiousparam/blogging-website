import { AppBar, Box, Tab, Tabs, Toolbar,Button} from "@mui/material"
import { headerstyles } from "../../styles/header-styles";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";


const Header = () => {
    const [value, setvalue] = useState(0);
  return (
    <AppBar sx = {headerstyles.appBar}>
        <Toolbar>
            <img  style ={{padding : "10px" ,height :"33px", width: "33px"}} src="blog1.png" alt="blog logo" />
            <Box sx ={headerstyles.tabContainer}>
                <Tabs  textColor="inherit" 
                TabIndicatorProps={{style:{ backgroundColor:"white"}}}
                indicatorColor="primary" value = {value}
                onChange={(e,val)=>setvalue(val)}>
                    <Tab disableRipple label="Home" />
                    <Tab disableRipple label="Blogs" /> 
                </Tabs>
                <Button startIcon={<FaSignInAlt/>} sx ={headerstyles.authbtn}>Auth</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;