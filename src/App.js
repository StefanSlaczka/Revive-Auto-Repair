import Navbar from "./Componnets/Navbar";
import MissonQ from "./Componnets/MissonQ";
import CarsShowcase from "./Componnets/CarsShowcase";
import Testimonials from "./Componnets/Testimonials";
import ContactForm from "./Componnets/ContactForm";
import Footer from "./Componnets/Footer";

import "./Style/App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MissonQ/>
      <CarsShowcase/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
