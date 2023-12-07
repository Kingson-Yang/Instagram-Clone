import { Box, Container } from "@mui/material";
import Posts from "./Posts/Posts";
import Suggested from "./SuggestedUser/Suggested";
import useUserStore from "../auth/useUserStore";

function Homepage() {

    return (
        <Container sx={{maxWidth: "xl"}}>
            <Box sx={{display: "flex", gap: 20}}>
                <Box sx={{flex: 2, paddingY: 10}}>
                    <Posts />
                </Box>
                <Box sx={{flex: 3, marginRight: '20px', display: {xs: 'none', lg: 'block'}, maxWidth: '300px'}}>
                    <Suggested />
                </Box>
            </Box>
        </Container>
    )
}

export default Homepage;