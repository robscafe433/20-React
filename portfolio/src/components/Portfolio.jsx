import React from "react";

const Portfolio = () => {
    return (
        <section id="portfolio" className="content-section">
            <h2>Portfolio</h2>
            <div className="portfolio-items">
                <div className="portfolio-item">
                    <h3>Project 1</h3>
                    <a href="https://deployed-link1.com">Deployed App</a>
                    <a href="https://github.com/user/repo1">GitHub Repo</a>
                </div>
                {/* Repeat for other projects */}
            </div>
        </section>
    );
};

export default Portfolio;
