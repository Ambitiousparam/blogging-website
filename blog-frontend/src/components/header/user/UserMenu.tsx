import { Box, IconButton,Menu, MenuItem ,Typography} from '@mui/material'
import { useState } from 'react';
import {FaUserNurse} from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { authActions } from '../../../store/auth-slice';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const [anchorEl,setAnchorEl]= useState<Element| null>(null);


  const handlelogout = ()=>{
    dispatch(authActions.logout());
    navigate("/")
  }
  const handleprofileclick =()=>{
    navigate("/profile")
  }
  return (
  <Box>
    <IconButton 
    onClick={(e)=>setAnchorEl(e.currentTarget)} 
    color="inherit">
    <FaUserNurse/>
    </IconButton>
    <Menu
    onClose={()=>setAnchorEl(null)}
    anchorEl = {anchorEl}open ={Boolean(anchorEl)}>
        <MenuItem onClick={handleprofileclick}>
        <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handlelogout}>
        <Typography>LogOut</Typography>
        </MenuItem>
    </Menu>
  </Box>
  )
}

export default UserMenu;