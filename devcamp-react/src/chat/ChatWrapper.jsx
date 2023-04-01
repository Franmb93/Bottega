import { createTheme, ThemeProvider } from "@mui/material";
import Theme from "../utils/Theme";
import React, { useContext, useEffect, useState } from "react";
import "@fontsource/bebas-neue/";
import EmptyWelcomePage from "./EmptyWelcomePage";
import LeftRoomNavbar from "./LeftRoomNavbar";
import axios from "axios";
import Config from "../Config.json";
import secureLocalStorage from "react-secure-storage";
import Message from "./Message";
import { RoomContext } from "./RoomContext";
import RoomWrapper from "./RoomWrapper";

let theme = createTheme(Theme);

export default function ChatWrapper() {
  const [serverList, setServerList] = useState([]);
  const [status, setStatus] = useState();
  const { roomId } = useContext(RoomContext);

  useEffect(() => {
    console.log(roomId);
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
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <LeftRoomNavbar serverList={serverList}></LeftRoomNavbar>
        {roomId !== "" ? (
          <RoomWrapper></RoomWrapper>
        ) : (
          <EmptyWelcomePage serverList={serverList}></EmptyWelcomePage>
        )}
      </ThemeProvider>
    </>
  );
}
