import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function EmptyWelcomePage({ serverList }) {
  return (
    <Box sx={generalBoxStyle}>
      <Grid container item alignContent={"center"} sx={{ height: "100%" }}>
        <Grid
          container
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ gap: "2rem" }}
        >
          <Typography
            style={{ opacity: 1, fontFamily: "Bebas Neue" }}
            color="secondary"
            variant="h2"
          >
            {"Check it out!"}
          </Typography>
          <Typography
            style={{ opacity: 1, fontFamily: "Bebas Neue" }}
            color="secondary"
            variant="h4"
          >
            {"You did not join a server, it appears!"}
          </Typography>
          <Typography
            style={{ opacity: 1, fontFamily: "Bebas Neue" }}
            color="secondary"
            variant="h2"
          >
            {"You might like one of these"}
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          sx={gridGeneralStyle}
        >
          {serverList.map((item) => {
            return (
              <Card key={item.id} sx={cardServerStyle} variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body2">
                      {"Read rules when you join!"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Join Server</Button>
                  </CardActions>
                </React.Fragment>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

const generalBoxStyle = {
  height: "100%",
  width: ["100%", "100%", "100%", "100%"],
  backgroundColor: "#132743",
  background: "linear-gradient(to top, #132743, #508dac)",

  position: "absolute",
  zIndex: "-1",
  left: ["0", "0", "0", "0"],
};

const gridGeneralStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  marginTop: "3rem",
};

const cardServerStyle = {
  backgroundColor: "#f7e4e4",
  background: "linear-gradient(to top, #ffcbcb, #f7e4e4)",
  transition: "0.5s ",
  width: "280px",
  "&:hover": {
    background: "linear-gradient(to top, #ffcbcb, #ffb5b5)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffb5b5",
  },
};
