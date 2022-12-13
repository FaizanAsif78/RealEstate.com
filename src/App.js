import './App.css';
import Navbar from "./components/navbar"; 
import HomeSection from "./components/home";
import Companylogos from "./components/company";
import Residence from "./components/residence";
import Values from "./components/valuesec";
import Contact from "./components/contact";
import Testmonial from "./components/testimonial";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection/>
      <Companylogos/>
      <Residence/>
      <Values/>
      <Contact/>
      <Testmonial/>
      <Footer/>
     
    </div>
  );
}

export default App;
