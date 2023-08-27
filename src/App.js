import "./App.css";
import Banner from "./components/Banner";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* ==========================Navbar=========================== */}
      <Navbar/>
      <hr/>
      {/* ==========================Banner=========================== */}
      <Banner/>
      {/* ==========================Projects========================= */}
      <Projects/>
      {/* ==========================Education========================= */}
      <Education/>
      {/* ==========================Testimonial========================= */}
      <Testimonial/>
      {/* ==========================Footer========================= */}
      <Footer/>
    </div>
  );
}

export default App;
