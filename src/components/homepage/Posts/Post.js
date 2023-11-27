import { Avatar, Box, Container, Input, Typography, Link } from "@mui/material"
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../Constants";

const Post = ({ img, username, avatar }) => {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isCommenting, setIsCommenting] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

    const handleComment = () => {
        if (isCommenting) {
            setIsCommenting(false);
        } else {
            setIsCommenting(true);
        }
    }
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", width: 'full', marginY: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={avatar} sx={{ height: '30px', width: '30px' }} />
                    <Link href="/homepage/profile" sx={{ display: 'flex', textDecoration: "none", color: 'black', fontSize: 12, fontWeight: 'bold', gap: 2 }}>
                        {username}
                        <Box color={"gray"}>• 1w</Box>
                    </Link>
                </Box>
                <Box sx={{ cursor: 'pointer' }}>
                    <Typography sx={{ fontSize: 12, color: 'blue', fontWeight: 'bold', '&:hover': { color: 'lightblue' }, transition: '0.2s ease-in-out' }}>
                        Unfollow
                    </Typography>
                </Box>
            </Box>
            <Box>
                <img style={{ width: '100%', aspectRatio: '4/5', borderRadius: 20 }} src={img} alt={username}></img>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, width: 'full', paddingTop: 0, marginBottom: 2, marginTop: 'auto' }}>
                <Box onClick={handleLike} sx={{ cursor: 'pointer', fontSize: 18 }}>
                    {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
                </Box>
                <Box onClick={handleComment} sx={{ cursor: 'pointer', fontSize: 18 }}>
                    <CommentLogo />
                </Box>
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                {likes} likes
            </Typography>
            {isCommenting ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: "space-between", width: '100%' }}>
                    <Input disableUnderline={true} placeholder="Add a comment..." />
                    <Box sx={{ fontSize: 14, fontWeight: 600, width: 50, cursor: 'pointer', color: 'blue', '&:hover': { color: 'lightblue' } }} size="small">Post</Box>
                </Box>
            ) : null}
        </Container>
    )
}

export default Post
