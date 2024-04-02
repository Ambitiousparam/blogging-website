import { Drawer, ListItemButton, ListItemIcon, List, IconButton } from "@mui/material";
import { useState } from "react";
import { AiFillProfile, AiOutlineLogin, AiOutlinePlus } from "react-icons/ai";
import { BiHomeAlt2, BiLogOut } from "react-icons/bi";
import { BsListColumns } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { useDispatch } from "react-redux"; // Correct import

import { authActions } from "../../store/auth-slice";

type Props = {
    isLoggedIn: boolean
}
type ListItem = {
    name: string,
    url: string,
    icon: JSX.Element;
    cb?: () => void | null;
};

const DrawerComp = (props: Props) => {
    const dispatch = useDispatch(); // Correct case

    const handlelogout = () => {
        dispatch(authActions.logout());
    };
    const navigate = useNavigate();

    const authLinks: ListItem[] = [ // Added type for authLinks
        { name: "Home", url: "/", icon: <BiHomeAlt2 /> },
        { name: "Blogs", url: "/blogs", icon: <BsListColumns /> },
        { name: "Add Blog", url: "/addBlog", icon: <AiOutlinePlus /> },
        { name: "Profile", url: "/profile", icon: <AiFillProfile /> },
        {
            name: "Logout",
            url: "/",
            icon: <BiLogOut />,
            cb: handlelogout,
        },
    ];
    const nonAuthLinks: ListItem[] = [ // Added type for nonAuthLinks
        { name: "Home", url: "/", icon: <BiHomeAlt2 /> },
        { name: "Blogs", url: "/blogs", icon: <BsListColumns /> },
        { name: "Auth", url: "/auth", icon: <AiOutlineLogin /> },
    ];

    const [open, setopen] = useState(false);
    const handlenavigate = (url: string, cb: (() => void) | null) => { // Changed cb type

        navigate(url);
        setopen(false);
        cb && cb();

    }
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <Drawer open={open} onClose={() => setopen(false)}>
                <List>
                    {(props.isLoggedIn ? authLinks : nonAuthLinks).map((item: ListItem) => (
                        <ListItemButton key={item.name} onClick={() => handlenavigate(item.url, item.cb ? item.cb : null)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            {item.name}
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: "auto", color: "inherit" }} onClick={() => setopen(!open)}> {/* Toggle the open state */}
                <FaHamburger />
            </IconButton>
        </div>
    )
}

export default DrawerComp;
