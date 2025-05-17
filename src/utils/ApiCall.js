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