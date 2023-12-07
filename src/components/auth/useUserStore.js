import { create } from "zustand"

const useUserStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({userProfile}),
}))

export default useUserStore;
