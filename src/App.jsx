import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
