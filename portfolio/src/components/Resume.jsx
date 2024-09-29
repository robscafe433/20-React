import React from "react";

const Resume = () => {
    return (
        <section id="resume" className="content-section">
            <h2>Resume</h2>
            <a href="/resume.pdf" download>
                Download My Resume
            </a>
            <ul>
                <li>Proficiency 1</li>
                <li>Proficiency 2</li>
            </ul>
        </section>
    );
};

export default Resume;
