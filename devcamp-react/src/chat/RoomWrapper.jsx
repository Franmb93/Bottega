import { useContext, useEffect, useState, useRef } from "react";
import Message from "./Message";
import WriteChat from "./WriteChat";
import Config from "../Config.json";
import { RoomContext } from "./RoomContext";
import DownloadingIcon from "@mui/icons-material/Downloading";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { SidebarContext } from "./SidebarContext";

export default function RoomWrapper() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const { roomId } = useContext(RoomContext);

  const messageContainerRef = useRef(null);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const { isSidebarCollapsed } = useContext(SidebarContext);

  const downloadingIconStyle = {
    position: "fixed",
    left: "50%",
    top: "1%",
    zIndex: 100,
    [theme.breakpoints.up("sm")]: {
      top: "2%",
    },
  };

  const messageContainerStyle = {
    overflow: "auto",
    maxHeight: "calc(100vh - 64px - 56px)",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "calc(100vh - 64px - 80px)",
    },
  };

  const updateMessages = async () => {
    console.log(roomId);
    const response = await fetch(
      `${Config.SERVER_URL}/api/message/infinite/${roomId}?page=0`
    );

    console.log(response);

    if (!response.ok) {
      console.error("Failed to load messages");
      return;
    }

    const data = await response.json();
    setMessages({...messages, data});
  };
  const loadMessages = async (pageNumber) => {
    console.log(`loadMessages: pageNumber=${pageNumber}, page=${page}`);

    if (loading) return;

    setLoading(true);

    const response = await fetch(
      `${Config.SERVER_URL}/api/message/infinite/${roomId}?page=${pageNumber}`
    );

    console.log(response);

    if (!response.ok) {
      console.error("Failed to load messages");
      setLoading(false);
      return;
    }

    const data = await response.json();
    if (pageNumber === 0) {
      setMessages(data);
    } else {
      setMessages((prevMessages) => [...prevMessages, ...data]);
      setHasMore(data.length > 0);
      setPage((prevPage) => prevPage + 1);
    }

    setLoading(false);
  };

  const handleLoadMore = () => {
    loadMessages(page + 1);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadMessages(0);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const container = messageContainerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);
  
  const containerStyle = {
    width: isSidebarCollapsed
      ? "100%"
      : matches
      ? "calc(100%)"
      : "100%",
    minHeight: "100vh",
    marginLeft: matches && !isSidebarCollapsed ? "0px" : "0px",
    backgroundColor: "#132743",
  };
  return (
    <div style={containerStyle}>
          {hasMore && !loading && ( 
        <DownloadingIcon
          style={downloadingIconStyle}
          onClick={() => handleLoadMore()} 
        ></DownloadingIcon>
      )}
      <div
        id="message-container"
        ref={messageContainerRef}
        style={messageContainerStyle}
      >
        <Message
          messages={messages.sort(
            (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
          )}
        />
        {loading && <div>Loading...</div>}
        {!hasMore && <div>No more messages</div>}
      </div>
      <WriteChat updateMessages={updateMessages} />
    </div>
  );
}
