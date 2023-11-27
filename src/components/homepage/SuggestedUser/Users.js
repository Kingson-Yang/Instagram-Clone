import { Avatar, Box, Stack } from '@mui/material'
import React, { useState } from 'react'

const Users = ({ followers, name, avatar }) => {
    const [isFollowed, setIsFollowed] = useState(false)
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={avatar} name={name} size={'md'} />
                <Stack spacing={1}>
                    <Box sx={{ fontSize: 12, fontWeight: 'bold'}}>
                        {name}
                    </Box>
                    <Box sx={{ fontSize: 11, color: 'gray' }}>
                        {followers} followers
                    </Box>
                </Stack>
            </Box>
            <Box onClick={() => setIsFollowed(!isFollowed)} sx={{ fontSize: 13, background: 'transparent', padding: 0, height: 'max-content', fontWeight: 'medium', color: 'blue', cursor: 'pointer', '&:hover': {color: 'lightblue'} }}>
                {isFollowed ? "Unfollow" : "Follow"}
            </Box>
        </Box>
    )
}

export default Users
