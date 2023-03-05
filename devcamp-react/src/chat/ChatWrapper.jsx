import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Theme from "../utils/Theme";
import React from "react";
import ChatCard from "./ChatCard";

let theme = createTheme(Theme);

export default function ChatWrapper() {
  return (
    <>
      <Box sx={boxStyle}>
        <ThemeProvider theme={theme}>
          <Grid
            sx={headerStyle}
            container
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography style={{ opacity: 1 }} color="secondary" variant="h3">
              {"Rooms"}
            </Typography>
          </Grid>
          <Grid
            gap={0.2}
            container
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
            <ChatCard
              title={"B2 Oxford"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae corporis recusandae."
              }
            ></ChatCard>
          </Grid>
        </ThemeProvider>
      </Box>
    </>
  );
}

const boxStyle = {
  width: "520px",
  height: "99.9vh",
  backgroundColor: "#132743",
  position: "absolute",
  borderBottom: "1px solid #508dac",
  background: "linear-gradient(to top, #132743, #508dac)",
  opacity: 1,
  overflowY: "scroll",
};

const headerStyle = {
  position: "sticky",
  top: 0,
  zIndez: 1,
  width: "100%",
  height: "6vh",
  backgroundColor: "#407088",
  color: "#ffb5b5",
  borderRadius: "2%",
  borderBottom: "1px solid #132743",
  background: "linear-gradient(to top, #407088, #589dc0)",
  boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.5)",
};
