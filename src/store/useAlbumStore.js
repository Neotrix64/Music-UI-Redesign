import { create } from "zustand";

const useAlbumStore = create((set) => ({
  selectedAlbum: [],
  setSelectedAlbum: (album) => set({ selectedAlbum: album }),
}));

export default useAlbumStore;
