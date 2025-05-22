import React from "react";
import {render, screen, fireEvent} from '@testing-library/jest-dom'
import SideBar from "../components/SideBar";
import { useSection } from "../components/Contexts/HomeContext";
const { setSection, section } = useSection();

test('La Seleccion de playlist funciona correctamente', () =>{
    render(<SideBar/>)
    const playlists = screen.getByTestId('playlistId');
    fireEvent.click(playlists);
    expect(section == "playlist")
})