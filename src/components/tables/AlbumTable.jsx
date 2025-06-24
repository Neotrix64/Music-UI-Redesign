import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";

import {
  useRowSelect,
  HeaderCellSelect,
  CellSelect,
  SelectClickTypes,
  SelectTypes,
} from "@table-library/react-table-library/select";
import useSongStore from "../../store/useSongStore"
import usePlayingPlaylistStore from "../../store/usePlayingPlaylistStore";

import { useEffect, useState } from "react";
import useAlbumStore from "../../store/useAlbumStore";
import usePlaylistStore from "../../store/usePlaylistStore";
import { useSection } from "../Contexts/HomeContext";

import { THEME } from "./utils/theme";
import { useTheme } from "@table-library/react-table-library/theme";

const customStyles = `
  .table-row {
    transition: background-color 0.2s ease;
  }
  
  .table-row:hover {
    background-color: rgba(255, 255, 255, 0.07) !important;
  }
  
  .table-row.selected {
    background-color: rgba(75, 75, 75, 0.5) !important;
  }
  
  .table-row.selected:hover {
    background-color: rgba(85, 85, 85, 0.6) !important;
  }
`;

function AlbumTable() {
  const { section } = useSection();
  
  // Album store (solo para visualización de la página)
  const selectedAlbum = useAlbumStore((state) => state.selectedAlbum);
  
  // Playlist store
  const selectedPlaylist = usePlaylistStore((state) => state.selectedPlaylist);
  
  // Playing playlist store (para el reproductor)
  const usePlayingMusic = usePlayingPlaylistStore((state) => state.usePlayingPlaylist);
  const setUsePlayingMusic = usePlayingPlaylistStore((state) => state.setPlayingPlaylist);
  
  const [tableData, setTableData] = useState({ nodes: [] });
  const [_, setSongs] = useState([]);
  const setCurrentSong = useSongStore((state) => state.setCurrentSong);
  
  // Estado para mantener control sobre la fila seleccionada
  const [selectedRowId, setSelectedRowId] = useState(null);

  // Determinar si estamos en modo álbum o playlist
  const isAlbumMode = section === 'album';
  const isPlaylistMode = section === 'playlist';
  
  // Obtener los datos actuales según el modo
  const currentData = isAlbumMode ? selectedAlbum : selectedPlaylist;
  const currentSongs = currentData?.idSongs || [];

  useEffect(() => {
    if (currentData && currentSongs.length > 0) {
      setSongs(currentSongs);

      let formattedSongs;

      if (isAlbumMode) {
        // Formateo para álbum
        const albumCover = selectedAlbum.albumCover;
        formattedSongs = currentSongs.map((song, index) => ({
          id: song._id,
          name: song.name,
          img: albumCover,
          type: song.type,
          artist: selectedAlbum.idArtist ? selectedAlbum.idArtist.name : "Unknown Artist",
          url: song.url,
          isComplete: Math.random() > 0.5,
          duration: song.duration || "4:00",
          originalSong: song
        }));
      } else {
        // Formateo para playlist
        formattedSongs = currentSongs.map((song, index) => ({
          id: song._id,
          name: song.name,
          img: song.albumCover || selectedPlaylist.albumCover || "/default-song.jpg",
          type: song.type,
          artist:  song.idArtist ? 
            (Array.isArray(song.idArtist) ? song.idArtist[0]?.name : song.idArtist.name) 
            : "Unknown Artist",
          album: song.idAlbum?.name || "Single",
          url: song.url,
          isComplete: Math.random() > 0.5,
          duration: song.duration || "4:00",
          originalSong: song
        }));
      }
      
      setTableData({ nodes: formattedSongs });
    } else {
      setTableData({ nodes: [] });
    }
  }, [selectedAlbum, selectedPlaylist, section]);

  const theme = useTheme(THEME);
  const select = useRowSelect(tableData, {
    state: { 
      single: true
    }
  }, {
    onChange: (options) => {
      // Actualizar nuestro estado local cuando cambia la selección
      if (options.state.ids && options.state.ids.length > 0) {
        setSelectedRowId(options.state.ids[0]);
      } else {
        setSelectedRowId(null);
      }
    }
  });

  const formatDuration = (dateString) => {
    const minutes = Math.floor(Math.random() * 3) + 2; // Entre 2-4 minutos
    const seconds = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

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

  const handleSongDoubleClick = (song) => {
    // Seleccionar la fila en la tabla
    select.fns.onToggleById(song.id);
    setSelectedRowId(song.id);
    
    console.log("Doble clic en canción:", song);

    // Establecer la playlist actual en el reproductor ANTES de setear la canción
    if (currentData && currentData !== usePlayingMusic) {
      console.log("Actualizando playlist del reproductor:", currentData);
      setUsePlayingMusic(currentData);
    }

    // Ahora establecer la canción actual
    setCurrentSong(song);
    
    // Para acceder a la canción original de la api
    if (song.originalSong) {
      console.log("Canción original:", song.originalSong);
    }
  };

  // Añadimos un handler para el clic simple
  const handleSongClick = (song) => {
    select.fns.onToggleById(song.id);
    setSelectedRowId(song.id);
  };

  // Función para obtener el título dinámicamente
  const getTableTitle = () => {
    if (isAlbumMode) {
      return "Full Album";
    } else if (isPlaylistMode) {
      return "Playlist Songs";
    }
    return "Songs";
  };

  return (
    <div className="mt-8">
      {/* Inyectamos los estilos CSS personalizados */}
      <style>{customStyles}</style>
      
      <h3 className="text-2xl font-bold -mt-10 mb-4">{getTableTitle()}</h3>
      <Table data={tableData} theme={theme} select={select} layout={{ fixedHeader: true }}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell resize>#</HeaderCell>
                <HeaderCell resize>Title</HeaderCell>
                {isPlaylistMode && <HeaderCell resize>Album</HeaderCell>}
                <HeaderCell resize>Genre</HeaderCell>
                <HeaderCell resize>Popular</HeaderCell>
                <HeaderCell resize>Duration</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item, index) => (
                <Row 
                  key={item.id} 
                  item={item} 
                  onClick={() => handleSongClick(item)}
                  onDoubleClick={() => handleSongDoubleClick(item)} 
                  className={`table-row ${selectedRowId === item.id ? 'selected' : ''}`}
                >
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
                  {isPlaylistMode && (
                    <Cell>
                      <span className="text-white/70">{item.album}</span>
                    </Cell>
                  )}
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