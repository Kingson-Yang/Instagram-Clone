import { Avatar, Box, Stack, Typography, Link} from "@mui/material";
import React from 'react'
import Users from "./Users";

const Suggested = () => {
    return (
        <Stack sx={{ paddingY: 8, paddingX: 6, gap: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar sx={{ size: 'lg' }}>K</Avatar>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>
                        Kingson
                    </Typography>
                </Box>
                <Link href={'/'} style={{ fontSize: 14, fontWeight: 'medium', color: 'blue', textDecoration: 'none', cursor: 'pointer' }}>
                    Log out
                </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography sx={{ fontSize: 12, fontWeight: 'bold',  color: 'gray'}}>
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
