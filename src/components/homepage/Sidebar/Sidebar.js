import { Avatar, Box, Tooltip, Link} from "@mui/material";
import { InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo, CreatePostLogo } from "../../Constants"
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = () => {

  const sidebarItems = [
    {
      icon: <AiFillHome color="black" size={25} />,
      text: "Home",
      link: '/homepage'
    },
    {
      icon: <SearchLogo />,
      text: "Search",
      link: '/homepage'
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
      link: '/homepage'
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
      link: '/homepage'
    },
    {
      icon: <Avatar sx={{ width: 25, height: 25 }}></Avatar>,
      text: "Profile",
      link: '/homepage/profile'
    }
  ]
  return (
    <Box sx={{
      height: '100vh',
      borderRight: '1px solid',
      borderColor: 'lightgray',
      paddingY: 8,
      position: 'fixed',
      top: 0,
      left: 0,
      paddingX: { xs: 1, md: 4 },
    }}
    >
        <Box sx={{ padding: 2, display: { xs: 'block', md: 'none' }, cursor: 'pointer', borderRadius: 6, '&:hover': { backgroundColor: 'lightgray' } }}>
          <Link href={'/homepage'}><InstagramMobileLogo /></Link>
        </Box>
        <Box sx={{ paddingLeft: 2, display: { xs: 'none', md: 'block' }, cursor: 'pointer' }}>
          <Link href={'/homepage'}><InstagramLogo /></Link>
        </Box>
        <Box sx={{ gap: 5, cursor: 'pointer' }}>
          {sidebarItems.map((item, index,) => (
            <Tooltip
              key={index}
              label={item.text}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <Link href={item.link} sx={{ display: 'flex', textDecoration: 'none', alignItems: 'center', gap: 4, borderRadius: 6, padding: 2, width: { xs: 25, md: '100%' }, '&:hover': { backgroundColor: 'lightgray' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {item.icon}
                <Box sx={{ display: { xs: 'none', md: 'block' }, color: 'black' }}>
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Box>
        <Tooltip
          label="Log Out"
          sx={{ display: { xs: 'block', md: 'none' }}}
        >
          <Link href={"/"} sx={{ textDecoration: 'none', position: "relative", top: '50%', display: 'flex', alignItems: 'center', gap: 4, borderRadius: 6, padding: 2, width: { xs: 25, md: '100%' }, '&:hover': { backgroundColor: 'lightgray' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            {<BiLogOut color="black" size={25} />}
            <Box sx={{ display: { xs: 'none', md: 'block' }, color: 'black' }}>
              Log Out
            </Box>
          </Link>
        </Tooltip>
      </Box>
  )
}

export default Sidebar;