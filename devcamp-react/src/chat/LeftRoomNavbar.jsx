import { Box, Grid, Typography } from "@mui/material";
import ChatCard from "./ChatCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";

export default function LeftRoomNavbar({ serverList }) {
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    if (serverList.length === 0) {
      setDirection("left");
    }
  }, [serverList]);

  const handleDirection = () => {
    if (direction === "right") {
      setDirection("left");
    } else {
      setDirection("right");
    }
  };

  return (
    <>
      {direction === "right" ? (
        <Box sx={boxStyle}>
          <Grid
            sx={headerStyle}
            container
            direction="row"
            alignItems={"center"}
            justifyContent={"flex-start"}
          >
            <Grid item xs={2}>
              <KeyboardArrowLeftIcon
                onClick={handleDirection}
              ></KeyboardArrowLeftIcon>
            </Grid>
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"flex-end"}
              xs={6}
            >
              <Typography style={{ opacity: 1 }} color="secondary" variant="h3">
                {"Rooms"}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            sx={headerStyle}
            container
            direction="row"
            alignItems={"center"}
            justifyContent={"flex-start"}
          >
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography style={{ opacity: 1 }} color="secondary" variant="h6">
                {"Explore Servers"}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            gap={0.2}
            container
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            {serverList.map((item) => {
              return (
                <ChatCard
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  content={item.description}
                ></ChatCard>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <ChevronRightIcon
          sx={floatingButton}
          onClick={handleDirection}
        ></ChevronRightIcon>
      )}
    </>
  );
}

const floatingButton = {
  position: "absolute",
  top: "1%",
  left: "1%",
  backgroundColor: "#508dac",
  color: "#132743",
  width: "30px",
  height: "30px",
  borderRadius: "100%",
  border: "1px solid #132743",
  transition: "0.5s",

  "&:hover": {
    backgroundColor: "#132743",
    color: "#f7e4e4",
  },
};

const boxStyle = {
  display: ["inherit"],
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
