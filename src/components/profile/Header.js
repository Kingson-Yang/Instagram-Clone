import useAuthStore from "../auth/authStore";
import { Box, Avatar, Stack, Typography, Button } from "@mui/material";
import useUserStore from "../auth/useUserStore";
import { useState } from "react";
import EditProfile from "./EditProfile";


const Header = () => {
    const { userProfile } = useUserStore();
    const authUser = useAuthStore((state) => state.user);
    const ownPage = authUser && authUser.username === userProfile.username;
    const visitingPage = authUser && authUser.username !== userProfile.username;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
<Box sx={{ display: 'flex', gap: { xs: 4, sm: 10 }, direction: { xs: 'column', sm: 'row' } }}>
<Avatar src={userProfile.profilePicURL} sx={{ width: { xs: 60, md: 125 }, height: { xs: 60, md: 125 }, justifySelf: 'center', alignSelf: 'flex-start' }}></Avatar>
<Stack sx={{ alignItems: 'start', gap: 2, flex: 1 }}>
    <Box sx={{ display: 'flex', gap: 4, justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
        <Typography sx={{ fontSize: { xs: 15, md: 20 } }}>
            {userProfile.username}
        </Typography>
        {ownPage && (<Box sx={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={handleOpen} sx={{ background: 'black', color: 'white', '&:hover': { background: 'gray' } }}>
                Edit Profile
            </Button>
        </Box>)}
        {visitingPage && (<Box sx={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
            <Button sx={{ background: 'rgba(119, 159, 247)', color: 'white', '&:hover': { background: 'lightblue' } }}>
                Follow
            </Button>
        </Box>)}
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 } }}>
        <Typography sx={{ fontSize: { xs: 15, md: 17.5 } }}>
            <Typography variant={'span'} sx={{ fontWeight: 'bold', marginRight: 1 }}>{userProfile.posts.length}</Typography>
            Posts
        </Typography>
        <Typography sx={{ fontSize: { xs: 15, md: 17.5 } }}>
            <Typography variant={'span'} sx={{ fontWeight: 'bold', marginRight: 1 }}>{userProfile.followers.length}</Typography>
            Followers
        </Typography>
        <Typography sx={{ fontSize: { xs: 15, md: 17.5 } }}>
            <Typography variant={'span'} sx={{ fontWeight: 'bold', marginRight: 1 }}>{userProfile.following.length}</Typography>
            Following
        </Typography>
    </Box>
    <Typography fontSize={15}>{userProfile.bio}</Typography>
</Stack>
{open && <EditProfile isOpen={open} onClose={handleClose}/>}
</Box>
  )
}

export default Header
