import { Card, CardContent, Typography } from "@mui/material";

export default function Message({ messages }) {
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
