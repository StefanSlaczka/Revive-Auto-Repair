import Navbar from "./Componnets/Navbar";
import MissonQ from "./Componnets/MissonQ";
import CarsShowcase from "./Componnets/CarsShowcase";
import Testimonials from "./Componnets/Testimonials";

import "./Style/App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MissonQ/>
      <CarsShowcase/>
      <Testimonials/>
    </div>
  );
}

export default App;
