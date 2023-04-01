import Message from "./Message";
import WriteChat from "./WriteChat";

export default function RoomWrapper() {
  return (
    <div
      style={{ width: "100%", minHeight: "100vh", backgroundColor: "#132743" }}
    >
      <Message></Message>
      <WriteChat></WriteChat>
    </div>
  );
}
