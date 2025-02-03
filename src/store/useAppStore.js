import artists from "../components/consts/artists";
import { create } from "zustand";

const useArtistStore = create((set) => ({
  selectedArtist: artists[0], // Estado inicial
  setArtist: (artist) => set({ selectedArtist: artist }), // Función para actualizar artista
}));

export default useArtistStore;
