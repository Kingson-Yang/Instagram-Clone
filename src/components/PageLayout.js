import { Box } from "@mui/material";
import Sidebar from "./homepage/Sidebar/Sidebar";
import useAuthStore from "./auth/authStore";

// instead of adding the Sidebar component to every page, we can add it only once to the PageLayout component and wrap the children with it. This way, we can have a sidebar on every page except the AuthPage.

const PageLayout = ({ children }) => {
	const authUser = useAuthStore(state => state.user);
	const canRenderSidebar = authUser

	return (
		<Box sx={{display: 'flex'}}>
			{/* sidebar on the left */}
			{canRenderSidebar ? (
				<Box width={{ xs: 70 + "px", md: 240 + "px" }}>
					<Sidebar />
				</Box>
			) : null }
			{/* the page content on the right */}
			<Box sx={{flex: 1, width: {xs: 'calc(100% - 70 px)', md: 'calc(100% - 240px)'}}}>
				{children}
			</Box>
		</Box>
	);
};

export default PageLayout;