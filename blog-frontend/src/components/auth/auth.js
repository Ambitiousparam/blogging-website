import { Box, Typography, TextField, InputLabel, Button, useMediaQuery,useTheme } from "@mui/material";
import { authstyles } from '../../styles/auth-styles';

const Auth = () => {
  const theme = useTheme(); 
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={authstyles.container}>
      <Box sx={authstyles.logotitle}>
        <img style={{ padding: "10px", height: "33px", width: "33px" }} src="blog1.png" alt="blog logo" />
        <Typography sx={authstyles.logotext}>devblog</Typography>
      </Box>
      <Box sx={{ ...authstyles.formcontainer, width: isBelowMd ? "50%" : "200px" }}>
        <Typography sx={authstyles.logotext}>Login </Typography>
        <form sx={authstyles.form}>
          <InputLabel aria-label="Name"></InputLabel>
          <TextField sx={{ marginBottom: 2 }} aria-label="name" label="Name" />

          <InputLabel aria-label="E-Mail"></InputLabel>
          <TextField sx={{ marginBottom: 2 }} aria-label="E-Mail" label="E-Mail" />

          <InputLabel aria-label="Password"></InputLabel>
          <TextField sx={{ marginBottom: 2 }} aria-label="Password" label="Password" type="password" />
          
          <Button variant="outlined" sx={authstyles.submitbtn}>Submit</Button>
        </form>
      </Box>
    </Box>
  );
}

export default Auth;
