import { Container } from '@mui/material'
import Post from './Post'
import img from '../../stock.png'

const Posts = () => {
  return (
    <Container maxWidth="sm" sx={{paddingY: 10, paddingX: 2}}>
        <Post username={"Kingson"} img={img}/>
    </Container>
  )
}

export default Posts
