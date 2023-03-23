import "./App.css";
import { Header } from "./components/Header";
import { LandingSection } from "./components/LandingSection";
import { ServicesSection } from "./components/ServicesSection";
import { TechnologySection } from "./components/TechnologySection";
// import { Footer } from "./components/Footer";
// import { LetsTalkSection } from "./components/LetsTalkSection";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingSection />
      <ServicesSection />
      <TechnologySection />
      {/*  <LetsTalkSection />
      <Footer /> */}
    </div>
  );
}

export default App;
