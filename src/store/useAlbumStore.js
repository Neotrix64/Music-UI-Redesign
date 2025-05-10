import { create } from "zustand";

const useAlbumStore = create((set) => ({
  selectedAlbum: null,
  setSelectedAlbum: (album) => set({ selectedAlbum: album }),
}));

export default useAlbumStore;
