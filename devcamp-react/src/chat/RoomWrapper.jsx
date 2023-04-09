import { useContext, useEffect, useState, useRef } from "react";
import Message from "./Message";
import WriteChat from "./WriteChat";
import Config from "../Config.json";
import { RoomContext } from "./RoomContext";
import DownloadingIcon from '@mui/icons-material/Downloading';


export default function RoomWrapper() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const { roomId } = useContext(RoomContext);

  const messageContainerRef = useRef(null);

  const updateMessages = async () => {
    const response = await fetch(
      `${Config.SERVER_URL}/api/message/infinite/${roomId}?page=0`
    );
  
    console.log(response);
  
    if (!response.ok) {
      console.error("Failed to load messages");
      return;
    }
  
    const data = await response.json();
    setMessages(data);
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
      setHasMore(false);
      return;
    }

    const data = await response.json();
    if (pageNumber === 0) {
      setMessages(data);
    } else {
      setMessages((prevMessages) => [...prevMessages, ...data]);
      setHasMore(data.length > 0);
    }

    setLoading(false);
  };

  const handleLoadMore = () => {
    loadMessages(page + 1);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    loadMessages(0);
  }, []);

  useEffect(() => {
    const container = messageContainerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

  return (
    <div
      style={{ width: "100%", minHeight: "100vh", backgroundColor: "#132743" }}
    >
      {page >= 0 && hasMore && (
        <DownloadingIcon style={{position: 'fixed', left: '50%', top: '1%', zIndex: 100}} onClick={handleLoadMore}></DownloadingIcon>
      )}
      <div
        id="message-container"
        ref={messageContainerRef}
        style={{ overflow: "auto", maxHeight: "calc(100vh - 64px - 56px)" }}
      >
        <Message messages={messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))} />
        {loading && <div>Loading...</div>}
        {!hasMore && <div>No more messages</div>}
      </div>
      <WriteChat updateMessages={updateMessages} />
    </div>
  );
}
