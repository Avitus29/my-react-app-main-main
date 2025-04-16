import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Components/Content/Content.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Header from "./Components/Header/Header.jsx"
import Navigation from "./Components/Navigation/Navigation.jsx"
import "./App.css";
import Appointment from "./Components/Appointment/Appointment";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
      <div>
        <Navigation />
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default App
