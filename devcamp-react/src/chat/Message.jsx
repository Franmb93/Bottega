import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Config from "../Config.json";
import { RoomContext } from "./RoomContext";

export default function Message({ room }) {
  const [messages, setMessages] = useState([]);
  const { roomId, setRoomId } = useContext(RoomContext);

  useEffect(() => {
    axios
      .get(`${Config.SERVER_URL}/api/message/infinite/${roomId}`)
      .then((response) => {
        console.log(response);
        setMessages(
          response.data.sort(
            (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
          )
        );
      });

    return () => {};
  }, []);

  return (
    <>
      {messages &&
        messages.map((message) => (
          <Card
            key={message.id}
            sx={{
              position: "relative",
              left: "27.2%",
              width: ["72.5%"],
              height: 75,
              backgroundColor: "#407088",
              color: "#f7e4e4",
              margin: "0.1rem",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14, color: "#ffb5b5" }} gutterBottom>
                {message.username}
                {"\u00A0"}
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                {new Date(message.timestamp)
                  .toLocaleDateString([], {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                  .replace(/\//g, "-")}
              </Typography>
              <Typography variant="body2">{message.content}</Typography>
            </CardContent>
          </Card>
        ))}
    </>
  );
}
