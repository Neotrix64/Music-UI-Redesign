import { create } from "zustand";

const usePlaylistStore = create((set) => ({
  selectedPlaylist: [],
  setSelectedPlaylist: (playlist) => set({ selectedPlaylist: playlist }),
}));

export default usePlaylistStore;
