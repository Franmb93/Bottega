import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import secureLocalStorage from "react-secure-storage";
import { useContext, useRef } from "react";
import { RoomContext } from "./RoomContext";
import axios from "axios";

export default function WriteChat({ updateMessages }) {
  const inputRef = useRef();
  const { roomId, setRoomId } = useContext(RoomContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target[0].value);

    const sendMessage = {
      username: secureLocalStorage.getItem("username"),
      content: event.target[0].value,
      user_id: secureLocalStorage.getItem("id"),
      room: { id: roomId },
      timestamp: new Date().toISOString(),
    };

    console.log(sendMessage);

    inputRef.current.value = "";

    axios
      .post("http://localhost:8080/api/message/", sendMessage)
      .then((response) => {
        updateMessages();
  });
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "fixed",
          left: "27.5%",
          top: "90%",
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
            "&:before": { borderBottom: "1px solid white" },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <StyledTextField
          style={{ width: "70vw" }}
          id="custom-color-textfield"
          inputRef={inputRef}
          label={secureLocalStorage.getItem("username")}
          variant="standard"
          InputLabelProps={{
            style: { color: "#ffcbcb" },
          }}
        />
        <button type="submit" hidden></button>
      </Box>
    </>
  );
}

const StyledTextField = styled(TextField)({
  color: "#ffcbcb",
  borderBottom: "2px solid #ffcbcb",
  "& .MuiInputBase-input": {
    color: "#ffcbcb",
  },
  "& .MuiInput-underline:before": {
    borderBottom: "2px solid #ffcbcb",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "2px solid #ffcbcb",
  },
});
