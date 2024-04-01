import { Drawer, ListItemButton, ListItemIcon, List, IconButton } from "@mui/material";
import { useState } from "react";
import { AiFillProfile, AiOutlineLogin, AiOutlinePlus } from "react-icons/ai";
import { BiHomeAlt2, BiLogOut } from "react-icons/bi";
import { BsListColumns } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

type Props ={
    isLoggedIn:boolean
}

const DrawerComp = (props:Props) => {
    const handlelogout = ()=>{};
    const navigate = useNavigate();

    const authLinks = [
        {name:"Home",url:"/",icon:<BiHomeAlt2/>},
        {name:"Blogs",url:"/blogs",icon:<BsListColumns/>},
        {name:"Add Blog",url:"/addBlog",icon:<AiOutlinePlus/>},
        {name:"Profile",url:"/profile",icon:<AiFillProfile/>},
        {
            name:"Logout",
            url:"/",
            icon:<BiLogOut/>,
            cb:handlelogout,
        },
    ];
        const nonAuthLinks=[
            {name:"Home",url:"/",icon:<BiHomeAlt2/>},
            {name:"Blogs",url:"/blogs",icon:<BsListColumns/>},
            {name:"Auth",url:"/auth",icon:<AiOutlineLogin/>},
        ];

    const [open,setopen] = useState(false);
    const handlenavigate =(url:string)=>{

        return navigate(url);

    }
  return (
  <div style ={{
    display:"flex",
    width:"100%"
  }}>
    <Drawer open={open} onClose={() => setopen(false)}>
        <List>
          {(props.isLoggedIn ? authLinks : nonAuthLinks).map((item, index) => (
            <ListItemButton key={item.name } onClick={() => handlenavigate(item.url)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {item.name}
            </ListItemButton>
          ))}
        </List>
    </Drawer>
    <IconButton  sx = {{marginLeft:"auto",  color :"inherit"}}  onClick={() => setopen(!open)}> {/* Toggle the open state */}
        <FaHamburger/>
    </IconButton>
  </div>
  )
}

export default DrawerComp;
