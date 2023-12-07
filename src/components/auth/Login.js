import "./style.css"
import logo from "./images/logo.png"
import appStore from "./images/Appstore.svg"
import googlePlay from './images/google.png'
import gif from "./images/instagram.gif"
import { useState } from 'react';
import { Box, Stack, Input, Typography, Button, Divider, Link, FormGroup } from "@mui/material"
import { Facebook } from "@mui/icons-material"
import useLogin from "./useLogin"

function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const { error, login } = useLogin();

  return (
    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <img style={{ width: '350px' }} src={gif}></img>
      </Box>
      <Stack>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid', borderColor: 'lightgray', width: '350px' }}>
          <Stack sx={{ width: '80%' }}>
              <img style={{ cursor: 'pointer', width: '90%' }} src={logo} />
              <Input placeholder={"Phone number, username, or email"} value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} disableUnderline={true} sx={{ border: '1px solid', borderRadius: 1, borderColor: 'lightgray', padding: 0.5, marginBottom: 1, width: '100%', fontSize: '12.5px', background: 'whitesmoke' }}></Input>
              <Input type={"password"} placeholder={"Password"} value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} disableUnderline={true} sx={{ border: '1px solid', borderRadius: 1, borderColor: 'lightgray', padding: 0.5, marginBottom: 1, width: '100%', fontSize: '12.5px', background: 'whitesmoke' }}></Input>
              <Button type="submit" onClick={() => login(inputs)} sx={{ width: '100%', background: 'rgba(133, 167, 255)', color: 'white', fontWeight: 'bold', textTransform: 'none', borderRadius: 1, '&:hover': { background: 'rgba(133, 167, 255)' } }}>Log in</Button>
              <Divider sx={{ width: '100%', fontWeight: 'bold', fontSize: 15, color: 'gray', gap: 2, marginY: 2 }}>OR</Divider>
              <Button disableRipple={true} sx={{ width: '100%', fontSize: 12.5, textTransform: 'none', padding: 1, '&:hover': { background: 'white' } }}><Facebook></Facebook>Log in with Facebook</Button>
              <Link href={'/auth/forgotpassword'} sx={{ textAlign: 'center', textDecoration: 'none', fontSize: 12.5, padding: 1 }}>Forgot password?</Link>
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginY: 1, padding: 3, border: '1px solid', borderColor: 'lightgray' }}>
          <Typography sx={{ fontSize: 15 }}>Don't have an account? Sign up <Link href={'/auth/signup'} sx={{ textDecoration: 'none' }}>here</Link></Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
          <Typography>Get the app</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo"><img src={appStore} style={{ padding: 0 }} /></Link>
          <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D05B4F35B-1156-417C-B269-D34491993590%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.instagram.com/&pli=1"><img src={googlePlay} style={{ padding: 0, width: 155 }} /></Link>
        </Box>
      </Stack>
    </Box>
  )
};

export default Login;