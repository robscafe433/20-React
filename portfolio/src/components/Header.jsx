import React from "react";

const Header = ({ activeSection, setActiveSection }) => {
    return (
        <header>
            <h1>John Doe</h1>
            <nav>
                <ul>
                    <li>
                        <a
                            href="#about"
                            className={
                                activeSection === "about" ? "active" : ""
                            }
                            onClick={() => setActiveSection("about")}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            className={
                                activeSection === "portfolio" ? "active" : ""
                            }
                            onClick={() => setActiveSection("portfolio")}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={
                                activeSection === "contact" ? "active" : ""
                            }
                            onClick={() => setActiveSection("contact")}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#resume"
                            className={
                                activeSection === "resume" ? "active" : ""
                            }
                            onClick={() => setActiveSection("resume")}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
