import { create } from "zustand";

const useProfileStore = create((set) => ({
    useProfileFilter: "popular", // Estado inicial
    setProfileFilter: (filter) => set({ useProfileFilter: filter }), 
}));

export default useProfileStore;
