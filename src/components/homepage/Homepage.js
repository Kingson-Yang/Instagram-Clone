import { Avatar, Box, Tooltip } from "@mui/material";
import { InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo, CreatePostLogo } from "./Constants"
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'

const Homepage = () => {

  const sidebarItems = [
    {
      icon: <AiFillHome color="black" size={25} />,
      text: "Home",
      link: '/',

    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar sx={{ width: 25, height: 25 }}>K</Avatar>,
      text: "Profile",
      link: "/"
    }
  ]
  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
      <Box sx={{ width: { xs: '70px', md: '240px' } }}>
        <Box sx={{
          height: '100vh',
          borderRight: '1px solid',
          borderColor: 'lightgray',
          paddingY: 8,
          position: 'sticky',
          top: 0,
          left: 0,
          paddingX: { xs: 1, md: 4 },
        }}
        >
          <Box sx={{ padding: 2, display: { xs: 'block', md: 'none' }, cursor: 'pointer', borderRadius: 6, '&:hover': { backgroundColor: 'lightgray' } }}>
            <InstagramMobileLogo />
          </Box>
          <Box sx={{ paddingLeft: 2, display: { xs: 'none', md: 'block' }, cursor: 'pointer' }}>
            <InstagramLogo />
          </Box>
          <Box sx={{ gap: 5, cursor: 'pointer' }}>
            {sidebarItems.map((item, index) => (
              <Tooltip
                key={index}
                label={item.text}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, borderRadius: 6, padding: 2, width: { xs: 25, md: '100%' }, '&:hover': { backgroundColor: 'lightgray'}, justifyContent: { xs: 'center', md: 'flex-start' }}}>
                  {item.icon}
                  <Box sx={{ display: { xs: 'none', md: 'block' }, color: 'black' }}>
                    {item.text}
                  </Box>
                </Box>
              </Tooltip>
            ))}
          </Box>
          <Tooltip
            label="Log Out"
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <Box sx={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 4, borderRadius: 6, padding: 2, width: { xs: 25, md: '100%' }, '&:hover': { backgroundColor: 'lightgray'}, justifyContent: { xs: 'center', md: 'flex-start' }}}>
              {<BiLogOut color="black" size={25}/>}
              <Box sx={{ display: { xs: 'none', md: 'block' }, color: 'black' }}>
                Log Out
              </Box>
            </Box>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
      </Box>
    </Box>
  )
}

export default Homepage;