// RoomContext.js
import React, { createContext, useState } from "react";

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [roomId, setRoomId] = useState("");

  const getRoomId = () => {
    if (roomId) {
      return { roomId, setRoomId };
    } else {
      return { roomId: "", setRoomId };
    }
  };

  return (
    <RoomContext.Provider value={getRoomId()}>{children}</RoomContext.Provider>
  );
};

export { RoomContext, RoomContextProvider };
