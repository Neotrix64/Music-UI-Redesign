import { create } from "zustand";

const useArtistStore = create((set) => ({
  selectedArtist: null,
  setArtist: (artist) => set({ selectedArtist: artist }), // Función para actualizar artista
}));

export default useArtistStore;
