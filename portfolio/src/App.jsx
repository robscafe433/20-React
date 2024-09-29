import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [activeSection, setActiveSection] = useState("about");

    const renderSection = () => {
        switch (activeSection) {
            case "about":
                return <About />;
            case "portfolio":
                return <Portfolio />;
            case "contact":
                return <Contact />;
            case "resume":
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div className="App">
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <main>{renderSection()}</main>
            <Footer />
        </div>
    );
}

export default App;
