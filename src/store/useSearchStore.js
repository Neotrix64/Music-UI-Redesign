import { create } from "zustand";

const useSearchStore = create((set) => ({
    useSearch: "", 
    setSearch: (search) => set({ useSearch: search }), 
}));

export default useSearchStore;
