import React, { useState } from "react";
import { Container, Paper, Typography, Button, TextField } from "@mui/material";
const Login = () => {
  const [isLogin, setLogin] = useState(false);
  const toggleLogin = () => {
    console.log(isLogin);
    console.log("funtion trigered");
    setLogin(!isLogin);
    console.log(isLogin);
  };
  return (
    <Container
      maxWidth="xs"
      component={"main"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* to make a card we are using "paper" */}
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px 50px",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5" sx={{ paddingBottom: "20px" }}>
              Login
            </Typography>
            <TextField
              required
              id="outlined-user-name"
              label="Email"
              margin="normal"
            />
            <TextField
              id="outlined-password"
              required
              label="password"
              margin="normal"
              type="password"
            />

            <Button
              sx={{ marginTop: "1rem" }}
              type="submit"
              variant="contained"
              color="success"
            >
              Login
            </Button>
            <Typography variant="h6" sx={{ marginTop: "20px" }} color="initial">
              OR
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "blue", cursor: "pointer " }}
              onClick={toggleLogin}
            >
              Create an account
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ paddingBottom: "20px" }}>
              Sign up
            </Typography>
            <TextField
              required
              id="outlined-user-name"
              label="Username"
              margin="normal"
              type="text"
            />
            <TextField
              required
              id="outlined-user-name"
              label="Email"
              margin="normal"
              type="email"
            />
            <TextField
              id="outlined-password"
              required
              label="password"
              margin="normal"
              type="password"
            />

            <Button
              sx={{ marginTop: "1rem" }}
              type="submit"
              variant="contained"
              color="success"
            >
              Create an account
            </Button>
            <Typography variant="h6" sx={{ marginTop: "20px" }} color="initial">
              OR
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "blue", cursor: "pointer " }}
              onClick={toggleLogin}
            >
              Already have an account ?
            </Typography>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
