import { Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

export default function Message({ messages }) {
  const { isSidebarCollapsed } = useContext(SidebarContext);

  return (
    <>
      {messages &&
        messages.map((message) => (
          <Card
            key={message.id}
            sx={{
              position: "relative",
              left: isSidebarCollapsed ? "0%" : ["18.4%","24.4%","27.4%","12.2%"],
              width: isSidebarCollapsed ? "99%" : ["85%"],
              height: "auto",
              backgroundColor: "#407088",
              color: "#f7e4e4",
              margin: "0.1rem",
              minHeight: 80,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
