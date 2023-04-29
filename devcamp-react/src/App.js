import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatWrapper from "./chat/ChatWrapper";
import Home from "./Home";
import Login from "./login/Login";
import { RoomContextProvider } from "./chat/RoomContext";
import { SidebarProvider } from "./chat/SidebarContext";
function App() {
  return (
    <BrowserRouter basename="/">
      <RoomContextProvider>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/application" element={<ChatWrapper />} />
          </Routes>
        </SidebarProvider>
      </RoomContextProvider>
    </BrowserRouter>
  );
}
export default App;
