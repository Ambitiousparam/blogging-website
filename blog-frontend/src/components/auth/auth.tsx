import { Box, Typography, TextField, InputLabel, Button, useMediaQuery, useTheme } from "@mui/material";
import { authstyles } from '../../styles/auth-styles';
import { useState } from "react";
import { useForm } from "react-hook-form";

const Auth = () => {
  const { formState: { errors }, handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
        <form onSubmit={handleSubmit(onSubmit)} sx={authstyles.form}>
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
            {...register("email", { required: true, validate: (val) =>
              /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(val) })}

          />

          <InputLabel aria-label="Password"></InputLabel>
          <TextField
            margin="normal"
            InputProps={{ style: { borderRadius: 10 } }}
            sx={{ marginBottom: 2 }} aria-label="Password" label="Password" type="password"
            {...register("password", { required: true, minLength: 6 })}
          />

          <Button variant="outlined" sx={authstyles.submitbtn}>Submit</Button>

          <Button
            onClick={() => setissignup((prev) => !prev)}
            sx={{ ...authstyles.submitbtn, ...authstyles.switchbtn }}>Switch to {issignup ? "Login" : "Signup"}</Button>
        </form>
      </Box>
    </Box>
  );
}

export default Auth;
