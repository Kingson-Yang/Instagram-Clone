import { Avatar, Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'
import ProfilePost from './ProfilePost'
import img from '../stock.png'

const Profile = () => {
    return (
        <Container maxWidth={'lg'}>
            <Box sx={{ display: 'flex', paddingY: 7.5, paddingLeft: { xs: 4, md: 10 }, width: '100%' }}>
                <Box sx={{ display: 'flex', gap: { xs: 4, sm: 10 }, direction: { xs: 'column', sm: 'row' } }}>
                    <Avatar sx={{ width: { xs: 60, md: 125 }, height: { xs: 60, md: 125 }, justifySelf: 'center', alignSelf: 'flex-start' }}></Avatar>
                    <Stack sx={{ alignItems: 'start', gap: 2, marginX: 'auto', flex: 1 }}>
                        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                            <Typography sx={{ fontSize: { xs: 15, md: 20 } }}>
                                Kingson
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Button sx={{ background: 'black', color: 'white', '&:hover': { background: 'gray' } }}>
                                    Edit Profile
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 } }}>
                            <Typography sx={{ fontSize: { xs: 15, md: 17.5 } }}>
                                <Typography variant={'span'} sx={{ fontWeight: 'bold', marginRight: 1 }}>100</Typography>
                                Posts
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 15, md: 17.5 } }}>
                                <Typography variant={'span'} sx={{ fontWeight: 'bold', marginRight: 1 }}>100</Typography>
                                Followers
                            </Typography>
                            <Typography sx={{ fontSize: { xs: 15, md: 17.5 } }}>
                                <Typography variant={'span'} sx={{ fontWeight: 'bold', marginRight: 1 }}>100</Typography>
                                Following
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>
                                Yes
                            </Typography>
                        </Box>
                        <Typography fontSize={15}>Insert Caption Here</Typography>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', marginLeft: { xs: 2.5, sm: 0 }, borderTop: '1px solid', borderColor: 'gray' }}>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: 4, textTransform: 'uppercase', fontWeight: 'bold' }}>
                    <Box sx={{ display: 'flex', borderTop: '1px solid black', alignItems: 'center', padding: 3, gap: 1, cursor: 'pointer' }}>
                        <Box fontSize={20}>
                            <BsGrid3X3 />
                        </Box>
                        <Typography sx={{ fontSize: 12, display: { xs: 'none', sm: 'block' } }}>
                            Posts
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 3, gap: 1, cursor: 'pointer' }}>
                        <Box fontSize={20}>
                            <BsBookmark />
                        </Box>
                        <Typography sx={{ fontSize: 12, display: { xs: 'none', sm: 'block' } }}>
                            Saved
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 3, gap: 1, cursor: 'pointer' }}>
                        <Box fontSize={20}>
                            <BsSuitHeart fontWeight={"bold"} />
                        </Box>
                        <Typography sx={{ fontSize: 12, display: { xs: 'none', sm: 'block' } }}>
                            Likes
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Grid sx={{ paddingLeft: 4 }} container columns={{ xs: 4, sm: 12 }} gap={0.5}>
                <ProfilePost img={img} />
                <ProfilePost img={img} />
                <ProfilePost img={img} />
                <ProfilePost img={img} />
            </Grid>
        </Container>
    )
}

export default Profile
