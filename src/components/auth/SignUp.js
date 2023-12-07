import logo from "./images/logo.png"
import appStore from "./images/Appstore.svg"
import { useState } from 'react';
import useSignUpWithEmailAndPassword from "./useSignUpWithEmailAndPassword";
import { Box, Stack, Typography, Divider, Link, Button, Input } from "@mui/material";
import { Facebook } from "@mui/icons-material";
import googlePlay from './images/google.png'

function SignUp() {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { signup } = useSignUpWithEmailAndPassword();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Stack>
                <Box sx={{ border: '1px solid', borderColor: 'lightgray', padding: 4, width: '300px' }}>
                    <img src={logo} alt="logo" style={{ width: '95%', cursor: 'pointer' }} />
                    <Typography sx={{ fontSize: 17.5, fontWeight: 'bold', color: 'gray', textAlign: 'center' }}>Sign up to see photos and videos from your friends.</Typography>
                    <Button sx={{width: '100%', background: 'rgba(133, 167, 255)', color: 'white', fontWeight: 'bold', textTransform: 'none', borderRadius: 1, marginY: 2, '&:hover': { background: 'rgba(133, 167, 255)' }}}><Facebook />Log in with Facebook</Button>
                    <Divider sx={{ width: '100%', fontWeight: 'bold', fontSize: 15, color: 'gray', gap: 2, marginY: 2 }}>OR</Divider>
                    <Input type={'email'} placeholder={"Email"} disableUnderline={true} sx={{ border: '1px solid', borderRadius: 1, borderColor: 'lightgray', padding: 0.5, marginBottom: 1, width: '100%', fontSize: '12.5px', background: 'whitesmoke' }} value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })}></Input>
                    <Input type={'text'} placeholder={"Username"} disableUnderline={true} sx={{ border: '1px solid', borderRadius: 1, borderColor: 'lightgray', padding: 0.5, marginBottom: 1, width: '100%', fontSize: '12.5px', background: 'whitesmoke' }} value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}></Input>
                    <Input type={'password'} placeholder={"Password"} disableUnderline={true} sx={{ border: '1px solid', borderRadius: 1, borderColor: 'lightgray', padding: 0.5, marginBottom: 1, width: '100%', fontSize: '12.5px', background: 'whitesmoke' }} value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}></Input>
                    <Typography sx={{ fontSize: 13.5, textAlign: 'center', paddingY: 2 }}>People who use our service may have uploaded your contact information to Instagram. <Link sx={{ textDecoration: 'none' }} href={'https://www.facebook.com/help/instagram/261704639352628'}>Learn More</Link></Typography>
                    <Typography sx={{ fontSize: 12.5, textAlign: 'center' }}>By signing up, you agree to our <Link sx={{ textDecoration: 'none' }} href={'https://help.instagram.com/581066165581870/?locale=en_US'}> Terms </Link>,<Link sx={{ textDecoration: 'none' }} href={'https://www.facebook.com/privacy/policy'}> Privacy Policy </Link>and<Link sx={{ textDecoration: 'none' }} href={'https://privacycenter.instagram.com/policies/cookies/'}> Cookies Policy</Link></Typography>
                    <Button onClick={() => signup(inputs)} sx={{ width: '100%', background: 'rgba(133, 167, 255)', color: 'white', fontWeight: 'bold', textTransform: 'none', borderRadius: 1, marginY: 2, '&:hover': { background: 'rgba(133, 167, 255)' } }}>Sign up</Button>
                </Box>

                <Box sx={{ textAlign: 'center', padding: 1 }}>
                    <Typography sx={{fontSize: 15}}>Get the app.</Typography>
                </Box>

                <Box sx={{ border: '1px solid', borderColor: 'lightgray', marginY: 1, padding: 2, textAlign: 'center' }}>Have an account? <Link href={'/'} sx={{ textDecoration: 'none' }}>Log in</Link></Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo"><img src={appStore} alt="appstore" style={{ padding: 0 }} /></Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D05B4F35B-1156-417C-B269-D34491993590%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.instagram.com/&pli=1"><img src={googlePlay} alt="google" style={{ padding: 0, width: 155 }} /></Link>
                </Box>
            </Stack>
        </Box>
    )
}

export default SignUp;