import { Box, Grid, Typography, Modal, Avatar, Divider, Stack, Input } from '@mui/material'
import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiSolidComment } from 'react-icons/bi'
import Comments from '../Comments'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../Constants'

const ProfilePost = ({ img }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

    return (
        <>
            <Grid item onClick={handleOpen} xs={3.9} sx={{ cursor: 'pointer', borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'black', position: 'relative', aspectRatio: '1/1' }}>
                <Box sx={{ display: 'flex', opacity: 0, '&:hover': { opacity: 0.75 }, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'black', transition: 'all 0.3s ease', zIndex: 1, justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: 4 }}>
                        <Box sx={{ display: 'flex' }}>
                            <AiFillHeart color={'white'} size={20} />
                            <Typography color={"white"} fontWeight={'bold'} marginLeft={2}>{likes}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <BiSolidComment color={'white'} size={20} />
                            <Typography sx={{ color: 'white', fontWeight: 'bold', marginLeft: 2 }}>0</Typography>
                        </Box>
                    </Box>
                </Box>

                <img src={img} alt="profile post" style={{ width: '100%', height: "100%", padding: 0 }} />
            </Grid>

            <Modal
                disableAutoFocus={true}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ display: 'flex', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: '90%', sm: '80%', md: '90%' }, aspectRatio: {xs: '5/4', sm: '16/9' }}}>
                    <Box sx={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderTopRightRadius: {xs: 10, sm: 0}, borderBottomRightRadius: {xs: 10, sm: 0}, overflow: 'hidden', border: '1px solid', borderColor: 'white', flex: 1.5 }}>
                        <img style={{ width: '100%', height: '100%', padding: 0 }} src={img} alt="profile post" />
                    </Box>

                    <Box sx={{ padding: 2.5, borderTopRightRadius: 10, borderBottomRightRadius: 10, flex: 1, flexDirection: 'column', background: 'white', display: { xs: 'none', sm: 'flex' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                                <Typography>Yes</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ marginY: 3 }} />

                        <Stack sx={{ width: '100%', alignItems: 'start', height: '350px', maxHeight: '350px', overflowY: 'auto' }}>
                            <Comments username={"kingson"} comment={"nice bird"} />
                        </Stack>

                        <Divider sx={{ marginY: 4 }} />

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, width: 'full', paddingTop: 0, marginBottom: 2}}>
                            <Box onClick={handleLike} sx={{ cursor: 'pointer', fontSize: 18 }}>
                                {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
                            </Box>
                            <Box sx={{ cursor: 'pointer', fontSize: 18 }}>
                                <CommentLogo />
                            </Box>
                        </Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                            {likes} likes
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: "space-between", width: '100%' }}>
                            <Input disableUnderline={true} placeholder="Add a comment..." />
                            <Box sx={{ fontSize: 14, fontWeight: 600, width: 50, cursor: 'pointer', color: 'blue', '&:hover': { color: 'lightblue' } }} size="small">Post</Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>

    )
}

export default ProfilePost
