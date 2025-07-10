import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/hotelowner/Layout";
import Dashboard from "./pages/hotelowner/Dashboard";
import AddRoom from "./pages/hotelowner/AddRoom";
import ListRoom from "./pages/hotelowner/ListRoom";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      <div>
        {!isOwnerPath && <Navbar />}
        {false && <HotelReg />}
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<AllRooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/rooms/rooms/:id" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/owner" element={<Layout />}>
              <Route path="/owner" element={<Dashboard />} />
              <Route path="add-room" element={<AddRoom />} />
              <Route path="list-room" element={<ListRoom />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
