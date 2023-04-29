import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import Theme from "../utils/Theme";
import React, { useContext, useEffect, useState } from "react";
import "@fontsource/bebas-neue/";
import EmptyWelcomePage from "./EmptyWelcomePage";
import LeftRoomNavbar from "./LeftRoomNavbar";
import axios from "axios";
import Config from "../Config.json";
import secureLocalStorage from "react-secure-storage";
import { RoomContext } from "./RoomContext";
import RoomWrapper from "./RoomWrapper";


let theme = createTheme(Theme);

export default function ChatWrapper() {
  const [serverList, setServerList] = useState([]);
  const [navBarCollapsed, setNavBarCollapsed] = useState(false); // NEW
  const { roomId } = useContext(RoomContext);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `${Config.SERVER_URL}/api/user/${secureLocalStorage.getItem(
            "id"
          )}/rooms`
        )
        .then((response) => {
          setServerList(response.data);
        });
    }

    fetchData();
  }, );

  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ height: '100vh', width: '100%'}}>
        <Grid item xs={12} md={2} sx={{backgroundColor: '#132743', transition: 'width 0.3s'}}>
          <LeftRoomNavbar serverList={serverList} onCollapse={setNavBarCollapsed}></LeftRoomNavbar> {/* Pass the setNavBarCollapsed function as a prop */}
        </Grid>
        <Grid item xs={12} md={navBarCollapsed ? 12 : 10} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#132743'}}>
          <Box sx={{ width: '100%', height: '100%', backgroundColor: '#132743' }}>
            {roomId !== "" ? (
              <RoomWrapper key={roomId}></RoomWrapper>
            ) : (
              <EmptyWelcomePage serverList={serverList}></EmptyWelcomePage>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}