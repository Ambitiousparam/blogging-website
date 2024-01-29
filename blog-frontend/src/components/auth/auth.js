import {Box,Typography,TextField,InputLabel} from  "@mui/material";
import { authstyles } from '../../styles/auth-styles';



const Auth = () => {
  return (
    <Box sx = {authstyles.container}>
      <Box sx ={authstyles.logotitle}><img  style ={{padding : "10px" ,height :"33px", width: "33px"}} src="blog1.png" alt="blog logo" />
      <Typography sx = {authstyles.logotext}>devblog</Typography>
      </Box>
      <Box sx = {authstyles.formcontainer}>
        <Typography sx = {authstyles.logotext}>Login </Typography>
        <form sx = {authstyles.form}>
         <InputLabel aria-label = "name" ></InputLabel>
        <TextField aria-label = "name"/>
        
        <InputLabel>E-mail</InputLabel>
        <TextField/>

        <InputLabel>Password</InputLabel>
        <TextField/>
        </form>
      </Box>
    </Box>
  )
}
export default Auth;