import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import icon from '../../assests/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Voice4Rights
      </Link>{' '}
      {new Date().getFullYear()}

      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Auth = () => {

  const [IsSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!IsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password")
    }
    if (IsSignup) {
      if (!name) {
        alert("Enter name to continue")
      }
      //console.log('SignUp')
      dispatch(signup({ name, email, password }, navigate))
    } else {
      dispatch(login({ email, password }, navigate))
    }
  }

  // return (
  //   <section className ='auth-section'>
  //     {IsSignup && <AboutAuth />}
  //     <div class='auth-container-2'>
  //       {!IsSignup && (<img src={icon} alt='Voice4Rights' className='login-logo' />)}

  //       <form onSubmit={handleSubmit}>
  //         {
  //           IsSignup && (
  //             <label htmlFor='name'>
  //               <h4>Display Name</h4>
  //               <input type="text" id='name' name='name' onChange={(e) => { setName(e.target.value)}} />
  //             </label>
  //           )
  //         }

  //         <label htmlFor="email">
  //           <h4>Email</h4>
  //           <input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
  //         </label>

  //         <label htmlFor="password">
  //           <div style={{ display: "flex", justifyContent: "space-between" }}>
  //             <h4>Password</h4>
  //             {!IsSignup && <p style={{ color: "#007ac6", fontSize: '13px' }}>Forgot Password?</p>}
  //           </div>
  //           <input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
  //           {IsSignup && <p style={{ color: "#666767", fontSize: "13px" }}>Passwords must contain at least eight<br /> characters, includding at least 1 letter and 1<br /> number.</p>}
  //         </label>

  //         {
  //           IsSignup && (
  //             <label htmlFor='check'>
  //               <input type="checkbox" id='check' />
  //               <p style={{ fontSize: "13px" }}> Opt-in to receive occassional<br />product upadates, user research invitations,<br />company announcements and digests<br /></p>
  //             </label>
  //           )
  //         }

  //         <button type='submit' className='auth-btn'> {IsSignup ? 'Sign up' : 'Log in'}</button>
  //         {
  //           IsSignup && (
  //             <p style={{ color: "#666767", fontSize: "13px" }}>
  //               By clicking "Sign up", you agree to our<span style={{ color: "#007ac6" }} > terms of<br />service</span>, <span style={{ color: "#007ac6" }}>privacy policy </span>and <span style={{ color: "#007ac6" }}>cookie policy.</span>
  //             </p>
  //           )
  //         }
  //       </form>

  //       <p>
  //         {IsSignup ? 'Already have an account?' : "Don't have an account?"}
  //         <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{IsSignup ? "Log in" : 'Sign up'}</button>
  //       </p>

  //     </div>
  //   </section>
  // )

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {
                IsSignup && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => { setName(e.target.value) }}
                  />
                )
              }
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {!IsSignup ? "Sign In" : "Sign Up"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={handleSwitch}>
                    {!IsSignup ? "Don't have an account? Sign Up" : "Already Have an Account"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Auth



