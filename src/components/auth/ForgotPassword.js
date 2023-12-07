import { Box, Input, Link, Stack, Typography, Button, Divider } from '@mui/material'
import { Lock } from '@mui/icons-material'

const ForgotPassword = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Box sx={{position: 'relative', width: "300px", border: '1px solid', borderColor: 'lightgray', padding: 5}}>
            <Stack>
                <Lock sx={{paddingY: 2, width: '100%'}}/>
                <Typography sx={{textAlign: 'center', paddingY: 1, fontSize: 17.5, fontWeight: 'bold'}}>Trouble logging in?</Typography>
                <Typography sx={{textAlign: 'center', paddingY: 1, color: 'gray', fontSize: 15}}>Enter your email, phone, or username and we'll send you a link to get back into your account.</Typography>
                <Input placeholder={"Phone, Username, or Email"} disableUnderline={true} sx={{ border: '1px solid', borderRadius: 1, borderColor: 'lightgray', padding: 1, marginBottom: 1, width: '100%', fontSize: '12.5px', background: 'whitesmoke' }}></Input>
                <Button disableRipple={true} sx={{ textTransform: 'none', color: 'white', background: 'rgba(133, 167, 255)', '&:hover': {background: 'rgba(133, 167, 255)'}}}>Send login link</Button>
                <Link sx={{textAlign: 'center', fontSize: 14, textDecoration: 'none', padding: 1}} href={'https://help.instagram.com/374546259294234'}>Can't reset your password?</Link>
                <Divider sx={{ width: '100%', fontWeight: 'bold', fontSize: 15, color: 'gray', gap: 2, marginY: 2 }}>OR</Divider>
                <Link sx={{textAlign: 'center', color: 'black', '&:hover': {color: 'gray'}, textDecoration: 'none', paddingBottom: 10}} href={'/auth/signup'}>Create new account</Link>
                <Button sx={{position: 'absolute', bottom: 0, left: 0, textTransform: 'none', color: 'black', background: 'rgba(235, 232, 232)', border: '1px solid', width: '100%', textDecoration: 'none', '&:hover': {background: 'rgba(235, 232, 232)', color: 'gray', borderColor: 'black'}}} href={'/'}>Back to login</Button>
            </Stack>
        </Box>
    </Box>
  )
}

export default ForgotPassword
