import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const Comments = ({username, profilePicture, comment, }) => {
  return (
    <Box sx={{paddingY: 1, display: 'flex', gap: 1.5}}>
      <Avatar src={profilePicture} sx={{width: 20, height: 20}} />
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Box display={'flex'} gap={1}>
          <Typography sx={{fontWeight: 'bold', fontSize: 12}}>
            {username}:
          </Typography>
          <Typography sx={{fontSize: 12}}>
            {comment}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Comments
