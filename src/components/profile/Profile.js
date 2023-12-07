import { Avatar, Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'
import ProfilePost from './ProfilePost'
import img from '../stock.png'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import useGetUserProfile from '../auth/useGetUserProfile'

const Profile = () => {
    const { username } = useParams()
    const { userProfile } = useGetUserProfile(username);

    if (!userProfile) return <UserNotFound />;

    return (
        <Container maxWidth={'lg'}>
            <Box sx={{ display: 'flex', paddingY: 7.5, paddingLeft: { xs: 4, md: 10 }, width: '100%' }}>
                <Header />
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

const UserNotFound = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', marginX: 'auto' }}>
            <Typography fontSize={'30px'}>User Not Found</Typography>
            <Link to={"/homepage"} color='blue' width={'max-content'} marginX={'auto'}>Go Home</Link>
        </Box>
    )
}