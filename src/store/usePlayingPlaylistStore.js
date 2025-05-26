import { create } from "zustand";

const usePlayingPlaylistStore = create((set) => ({
  usePlayingPlaylist: [],
  setPlayingPlaylist: (music) => set({ usePlayingPlaylist: music }),
}));

export default usePlayingPlaylistStore;
