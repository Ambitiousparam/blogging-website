import { AppBar, Box, Tab, Tabs, Toolbar, Button, useMediaQuery, useTheme } from "@mui/material";
import { headerstyles } from "../../styles/header-styles";
import { useState } from "react";
import { FaSignInAlt, FaBlogger } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./user/UserMenu";
import Typography from "@mui/material/Typography";
import DrawerComp from "./DrawerComp"; 

const Header = () => {
  const theme = useTheme();
  const isBelowmd = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isBelowmd);
  const navigate = useNavigate();
  const handleAddBlog = () => {
    navigate("/AddBlog");
  };
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  const [value, setvalue] = useState(0);

  return (
    <AppBar sx={headerstyles.appBar}>
      <Toolbar>
        <FaBlogger style={{ padding: "10px", height: "33px", width: "33px" }}
         />
        {isBelowmd ? (
          <DrawerComp isLoggedIn={isLoggedIn} />
        ) : (
          <>
            {isLoggedIn && (
              <Box onClick={handleAddBlog} sx={headerstyles.addLink}>
                <Typography sx={{ fontFamily: 'Work Sans' }}>
                  Post New Blog
                </Typography>
              </Box>
            )}
            <Box sx={headerstyles.tabContainer}>
              <Tabs textColor="inherit"
                TabIndicatorProps={{ style: { backgroundColor: "white" } }}
                indicatorColor="primary" value={value}
                onChange={(e, val) => setvalue(val)}>
                {/*@ts-ignore*/}
                <Tab component={Link} to="/" disableRipple label="Home" />
                {/*@ts-ignore*/}
                <Tab component={Link} to="/blogs" disableRipple label="Blogs" />
              </Tabs>
              {/*@ts-ignore*/}
              {isLoggedIn ? <UserMenu /> : <Button component={Link} to="/auth" startIcon={<FaSignInAlt />} sx={headerstyles.authbtn}>Auth</Button>}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
