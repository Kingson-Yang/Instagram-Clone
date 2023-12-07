import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect } from "react"
import { firestore } from "../../firebase"
import useUserStore from "./useUserStore"

const useGetUserProfile = (username) => {
    const {userProfile, setUserProfile} = useUserStore()
    useEffect(() => {
        const getUserProfile = async() => {
            try {
                const q = query(collection(firestore, "users"), where("username", "==", username))
                const snapshot = await getDocs(q);

                if(snapshot.empty) return setUserProfile(null);
                let userDoc;
                snapshot.forEach((doc) => {
                    userDoc = doc.data();
                });

                setUserProfile(userDoc);
            } catch (error) {
                console.log(error)
            }
        };

        getUserProfile();
    }, [setUserProfile, username])

    return {userProfile}
}

export default useGetUserProfile;
