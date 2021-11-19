import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Stack from "@mui/material/Stack";

function Register({
    onChangeName,
    onChangeEmail,
    onChangePass,
    onSubmitHandle,
    onSubmitGitHub,
    onSubmitGoogle,
    onSubmitFacebook,
}) {
    return (
        <div>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: "url(https://logodix.com/logo/1877084.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form onSubmit={(e) => onSubmitHandle(e)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChangeName}
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        name="name"
                                        autoComplete="Name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChangeEmail}
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChangePass}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                sx={{
                                    bgcolor: "#263238",
                                    "&:hover": {
                                        backgroundColor: "#263238",
                                        color: "#FFF",
                                    },
                                    mt: 3,
                                }}
                                type="submit"
                                fullWidth
                                variant="contained"
                            >
                                Sign Up
                            </Button>
                            <Stack direction="row" spacing={2} mt={2} justifyContent="center">
                                <Button
                                    sx={{
                                        width: 120,
                                        bgcolor: "black",
                                        "&:hover": {
                                            backgroundColor: "black",
                                            color: "#FFF",
                                        },
                                    }}
                                    variant="contained"
                                    startIcon={<GitHubIcon />}
                                    onClick={onSubmitGitHub}
                                >
                                    GitHub
                                </Button>
                                <Button
                                    onClick={onSubmitFacebook}
                                    sx={{ width: 120 }}
                                    color="primary"
                                    variant="contained"
                                    startIcon={<FacebookIcon />}
                                >
                                    Facebook
                                </Button>
                                <Button
                                    onClick={onSubmitGoogle}
                                    sx={{ width: 120 }}
                                    color="error"
                                    variant="contained"
                                    startIcon={<GoogleIcon />}
                                >
                                    Google
                                </Button>
                            </Stack>
                            <Grid container justifyContent="flex-end">
                                <Link to="/log" style={{ textDecoration: "none" }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Register;

/*
 return (
      <div>
 <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form onSubmit={(e) => onSubmitHandle(e)}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  onChange={onChangeName}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={onChangeEmail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={onChangePass}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
            type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/log" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
            </form>
          </Grid>
        </Grid>
      
    </div>
     
     
    );   
 */
