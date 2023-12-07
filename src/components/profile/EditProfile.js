import { Box, Button, Avatar, Input, Modal, Stack, FormControl, FormLabel, Container, Hidden } from "@mui/material"
import useAuthStore from "../auth/authStore";
import { useRef, useState } from "react";
import useEditProfile from "./useEditProfile";

const EditProfile = ({ isOpen, onClose}) => {
    const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		bio: "",
	});
	const authUser = useAuthStore((state) => state.user);
	const fileRef = useRef(null);
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
	const { editProfile } = useEditProfile();

    const handleEditProfile = async () => {
		try {
			await editProfile(inputs, selectedFile);
			setSelectedFile(null);
            onClose();
		} catch (error) {
			console.log(error)
		}
	};

    return (
        <Modal open={isOpen}>
            <Container maxWidth={'sm'}>
                <Box sx={{ background: 'white', boxShadow: 'xl', border: '1px solid gray', margin: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                        <Stack sx={{ gap: 4, width: '100%', maxWidth: 'md', background: 'white', padding: 6, marginY: 0 }}>
                            <FormControl>
                                <Box sx={{ display: 'flex', gap: 6 }}>
                                    <Avatar src={selectedFile || authUser.profilePicURL} sx={{ width: '100px', height: '100px', border: '2px solid gray' }}></Avatar>
                                    <input id="file" style={{ display: 'none' }} ref={fileRef} onChange={handleImageChange} type="file" />
                                    <label htmlFor="file">
                                        <Button onClick={() => fileRef.current.click()} sx={{ marginY: 5, width: '225px' }} variant="contained" component="span">
                                            Edit Profile Picture
                                        </Button>
                                    </label>
                                </Box>
                            </FormControl>

                            <FormControl>
                                <Input type="text" sx={{ fontSize: '15px' }} placeholder="Username" value={inputs.username || authUser.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}/>
                            </FormControl>
                            <FormControl>
                                <Input type="text" sx={{ fontSize: '15px' }} placeholder="Bio" value={inputs.bio || authUser.bio} onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}/>
                            </FormControl>
                            <Box display={'flex'} gap={6}>
                                <Button variant="contained" color="error" onClick={onClose} sx={{ color: 'white', width: '100%' }}>Cancel</Button>
                                <Button variant="contained" onClick={handleEditProfile} sx={{ color: 'white', width: '100%' }}>Submit</Button>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Modal>
    )
}

export default EditProfile

const usePreviewImg = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const maxFileSizeInBytes = 100 * 1024 * 1024; // 2MB

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file && file.type.startsWith("image/")) {
			if (file.size > maxFileSizeInBytes) {
				setSelectedFile(null);
				return;
			}
			const reader = new FileReader();

			reader.onloadend = () => {
				setSelectedFile(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			setSelectedFile(null);
		}
	};

	return { selectedFile, handleImageChange, setSelectedFile };
};