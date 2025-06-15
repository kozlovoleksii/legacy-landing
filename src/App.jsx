import "./index.css";
import { Header } from "./components/Header/Header";
import { MainSection } from "./components/MainSection/MainSection";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Team } from "./components/Team/Team";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";

function App() {


  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="page">
          <MainSection />
          <About />
          <Services />
          <Portfolio />
          <Team />
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
