import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAlbums = async () => {
  try {
    const response = await axios.get(`${apiUrl}/Album/get`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Hubo un error" + error)
  }
};

export const getRandomSongs = async () =>{
  try{
    const response = await axios.get(`${apiUrl}/Song/get/random`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Hubo un error" + error)
  }
}

export const getTypeSongs = async (type) =>{
  try{
    const response = await axios.get(`${apiUrl}/Song/tipo/${type}`)
    console.log("canciones", response.data.canciones)
    return response.data.canciones;
  } catch (error){
    console.error("Hubo un error"+error)
  }
}

export const getLibrary = async () =>{
  try{
    const response = await axios.get(`${apiUrl}/Playlist/get/all`);
    return response.data;
  } catch (error){
    console.error("Error"+ error);
  }
}

export const getSearch = async (busqueda) =>{
  try{
    const response = await axios.get(`${apiUrl}/busqueda/`);
    let respuestaFiltrada = {};
    const albums = response.data.albums
    const song = response.data.song
    const artista = response.data.artistas

    const filtroAlbum = albums.filter((album) => album.name.toLowerCase().includes(busqueda)).slice(0,2) || " no results"
    const filtroSong = song.filter((song) => song.name.toLowerCase().includes(busqueda)).slice(0,2)
    const filtroArtista = artista.filter((artista) => artista.name.toLowerCase().includes(busqueda)).slice(0,2)

    respuestaFiltrada = {
      filtroAlbum,
      filtroSong,
      filtroArtista
    }
   


    console.log(respuestaFiltrada)
    return respuestaFiltrada;
  } catch(error){
    console.error("error"+error)
  }
}