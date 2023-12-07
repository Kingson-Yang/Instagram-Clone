import useAuthStore from "../auth/authStore";
import useUserStore from "../auth/useUserStore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const useEditProfile = () => {

	const authUser = useAuthStore((state) => state.user);
	const setAuthUser = useAuthStore((state) => state.setUser);
	const setUserProfile = useUserStore((state) => state.setUserProfile);

	const editProfile = async (inputs, selectedFile) => {

		const storageRef = ref(storage, `profilePics/${authUser.uid}`);
		const userDocRef = doc(firestore, "users", authUser.uid);

		let URL = "";
		try {
			if (selectedFile) {
				await uploadString(storageRef, selectedFile, "data_url");
				URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
			}

			const updatedUser = {
				...authUser,
				username: inputs.username || authUser.username,
				bio: inputs.bio || authUser.bio,
				profilePicURL: URL || authUser.profilePicURL,
			};

			await updateDoc(userDocRef, updatedUser);
			localStorage.setItem("user-info", JSON.stringify(updatedUser));
			setAuthUser(updatedUser);
			setUserProfile(updatedUser);
			alert("Success", "Profile updated successfully", "success");
		} catch (error) {
			console.log(error)
		}
	};

	return { editProfile };
};

export default useEditProfile;