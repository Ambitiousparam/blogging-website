import { Box, Typography, TextField, InputLabel, Button, useMediaQuery, useTheme } from "@mui/material";
import { authstyles } from '../../styles/auth-styles';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { USER_LOGIN, USER_SIGNUP } from "../graphql/mutations";
type Inputs ={
  name:string,
  email:string,
  password:string,
}

const Auth = () => {
  const { 
    register, 
    formState:{ errors }, 
    handleSubmit } = useForm<Inputs>();


  const [login,loginResponse] = useMutation(USER_LOGIN);
  const[signup,signupResponse]= useMutation(USER_SIGNUP);


  const onSubmit =async ({name,email,password}:Inputs) => {
    if(issignup){
await signup({variables:{
  name,
  email,
  password,
}}).then(()=>{
  console.log(signupResponse.data);
})
    }else
   await login({variables:{
    email,
    password,
   },
}).then(()=>{
console.log(loginResponse.data);
})
};

  const [issignup, setissignup] = useState(false);
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={authstyles.container}>
      <Box sx={authstyles.logotitle}>
        <img style={{ padding: "10px", height: "33px", width: "33px" }} src="blog1.png" alt="blog logo" />
        <Typography sx={authstyles.logotext}>devblog</Typography>
      </Box>
      <Box sx={{ ...authstyles.formcontainer, width: isBelowMd ? "50%" : "200px" }}>
        <Typography sx={authstyles.logotext}>{issignup ? "Signup" : "Login"} </Typography>
        {/**@ts-ignore */}
        <form onSubmit={handleSubmit(onSubmit)} style={authstyles.form}>

          {issignup && (
            <>
              <InputLabel aria-label="Name"></InputLabel>
              <TextField margin="normal"
                InputProps={{ style: { borderRadius: 10 } }}
                sx={{ marginBottom: 2 }} aria-label="name" label="Name"
                {...register("name", { required: true })}
              />
            </>
          )}

          <InputLabel aria-label="E-Mail"></InputLabel>
          <TextField
            error={Boolean(errors.email)}
            margin="normal"
            InputProps={{ style: { borderRadius: 10 } }}
            sx={{ marginBottom: 2 }} aria-label="E-Mail" label="E-Mail"
            {...register("email", { required: true, validate: (val: string) =>
              /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(val) })}
            

          />

          <InputLabel aria-label="Password"></InputLabel>
          <TextField
            margin="normal"
            InputProps={{ style: { borderRadius: 10 } }}
            sx={{ marginBottom: 2 }} aria-label="Password" label="Password" type="password"
            {...register("password", { required: true, minLength: 6  })}
          /> 

          <Button type="submit" variant="outlined" sx={authstyles.submitbtn}>Submit</Button>

          <Button onClick={() => setissignup((prev) => !prev)}
          //@ts-ignore
              sx={{...authstyles.submitbtn,...authstyles.switchbtn,...(issignup ? authstyles.signupButton : authstyles.loginButton)}}>
              Switch to {issignup ? "Login" : "Signup"}
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Auth;
