import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useEffect, useState } from "react";
import useAlbumStore from "../../store/useAlbumStore";

import { THEME } from "./utils/theme";
import { useTheme } from "@table-library/react-table-library/theme";
import { getRelativeTime } from "../../utils/formatDate";

function AlbumTable() {

  const selectedAlbum = useAlbumStore((state) => state.selectedAlbum);
  const setSelectedAlbum = useAlbumStore((state) => state.setSelectedAlbum);
  const [tableData, setTableData] = useState({ nodes: [] });
   const [songs, setSongs] = useState([]);


   useEffect(() => {
    if (selectedAlbum && selectedAlbum.idSongs) {
      setSongs(selectedAlbum.idSongs);

      const portada = selectedAlbum.albumCover
      
      const formattedSongs = selectedAlbum.idSongs.map((song, index) => ({
        id: song._id,
        name: song.name,
        img: portada,
        type: song.type,
        artist: selectedAlbum.idArtist ? selectedAlbum.idArtist.name : "Unknown Artist",
        url: song.url,
        isComplete: Math.random() > 0.5,
        duration: "4:00"
      }));
      
      setTableData({ nodes: formattedSongs });
    }
  }, [selectedAlbum]);

  const theme = useTheme(THEME);

  const formatDuration = (dateString) => {
    const minutes = Math.floor(Math.random() * 3) + 2; // Entre 2-4 minutos
    const seconds = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Función para formatear la popularidad
  const formatPopularity = (isComplete) => {
    return isComplete ? 
      <span className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Popular
      </span> 
      : "";
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Full Album</h3>
      <Table data={tableData} theme={theme} layout={{ fixedHeader: true }}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell resize>#</HeaderCell>
                <HeaderCell resize>Title</HeaderCell>
                <HeaderCell resize>Genre</HeaderCell>
                <HeaderCell resize>Popular</HeaderCell>
                <HeaderCell resize>Duration</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item, index) => (
                <Row key={item.id} item={item}>
                  <Cell className="text-white/50">{index + 1}</Cell>
                  <Cell>
                    <div className="flex items-center">
                      <div className="mr-3 hidden sm:block">
                        <img 
                          src={item.img}
                          alt={item.name} 
                          className="h-10 w-10 rounded" 
                        />
                      </div>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-white/50">{item.artist}</div>
                      </div>
                    </div>
                  </Cell>
                  <Cell>{item.type}</Cell>
                  <Cell>{formatPopularity(item.isComplete)}</Cell>
                  <Cell>{formatDuration(item.deadline)}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </div>
  );
}

export default AlbumTable;