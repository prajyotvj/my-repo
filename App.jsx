import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookNow from "./components/BookNow";
import Login from "./components/Login";
import BusList from "./components/BusList";
import SeatSelection from "./components/SeatSelection";
import PassengerDetails from "./components/PassengerDetails";
import EditBus from "./components/EditBus";
import AddBus from "./components/AddBus";
import Protected from "./components/Protected";
import BookingStatus from "./components/BookingStatus";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="page-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Protected Component={HomePage} />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/bus-list"
              element={<Protected Component={BusList} role={["agent"]} />}
            />
            <Route
              path="/booknow"
              element={<Protected Component={BookNow} role={["customer"]} />}
            />
            <Route
              path="/seat-selection/:busId"
              element={
                <Protected Component={SeatSelection} role={["customer"]} />
              }
            />
            <Route
              path="/booking-status"
              element={
                <Protected Component={BookingStatus} role={["customer"]} />
              }
            />
            <Route
              path="/passenger-details"
              element={
                <Protected Component={PassengerDetails} role={["customer"]} />
              }
            />
            <Route
              path="/edit-bus/:id"
              element={<Protected Component={EditBus} role={["agent"]} />}
            />
            <Route
              path="/add-bus"
              element={<Protected Component={AddBus} role={["agent"]} />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
