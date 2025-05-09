import axios from "axios";

export const getAlbums = async () => {
  try {
    const response = await axios.get("http://localhost:3000/Album/get");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Hubo un error" + error)
  }
};
