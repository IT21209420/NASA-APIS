// import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import Rovers from "./pages/rovers/Rovers";
import PictureOfTheDay from "./pages/pictureOfTheDay/PictureOfTheDay";
import EarthImaginery from "./pages/earthImaginery/EarthImaginery";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <Router>
      <ToastContextProvider>
        <AuthContextProvider>
          <Layout>
            <Routes>
              <Route path="/rovers" element={<Rovers />} />
              <Route path="/picture_of_the_day" element={<PictureOfTheDay />} />
              <Route path="/earth_imagery" element={<EarthImaginery />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </AuthContextProvider>
      </ToastContextProvider>
    </Router>
  );
}

export default App;
