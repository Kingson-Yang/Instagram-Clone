import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from 'react'
import Users from "./Users";
import useLogOut from "../../auth/useLogOut";
import useAuthStore from "../../auth/authStore";
import { Link } from "react-router-dom";

const Suggested = () => {
    const { handleLogout, error } = useLogOut()
    const authUser = useAuthStore((state) => state.user);

    return (
        <Stack sx={{ paddingY: 8, paddingX: 6, gap: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                <Link to={`/${authUser?.username}`}><Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={authUser.profilePicURL} sx={{ size: 'lg' }}></Avatar>
                    <Typography sx={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>
                        {authUser.username}
                    </Typography>
                </Box>
                </Link >
                <Box onClick={handleLogout} style={{ fontSize: 14, fontWeight: 'medium', color: 'blue', textDecoration: 'none', cursor: 'pointer' }}>
                    Log out
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'gray' }}>
                    Suggested for you
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 'bold', '&:hover': { color: 'gray' }, cursor: 'pointer' }}>
                    See all
                </Typography>
            </Box>
            <Users followers={1000} name={'kingson'} />
        </Stack>
    )
}

export default Suggested
