import Project from "./ProjectBar";

const ProjectSection = (props) => {
    return(
        <div className="projects-section">
            <div className="header">Projects.</div>
            <div className="projects-grid flex-centered">

                <Project 
                    projectUrl="https://github.com/devarshi-ap/weather-webapp"
                    title="Weather App"
                    description="A Web-SPA which displays useful meteorological data for a given city using the Openweathermap API."
                    arr={["js", "html", "css"]}
                />

                <Project 
                    projectUrl="https://github.com/devarshi-ap/twitter-cli-tool"
                    title="Twty"
                    description="A Twitter Command Line Interface tool which allows users to perform twitter actions from the terminal within seconds."
                    arr={["python"]}
                />

                <Project 
                    projectUrl="https://github.com/devarshi-ap/dev-ap"
                    title="Portfolio Website"
                    description="A lightweight personal portfolio website built with React, react-router-dom, and Sass."
                    arr={["react", "sass"]}
                />

                <Project 
                    projectUrl="https://github.com/devarshi-ap/ecommerce-site-clone"
                    title="E-Commerce Shopify Site Clone"
                    description="Clone of shopify's e-commerce site built- ground up- with react components, react-router-dom, material-ui, and sass."
                    arr={["react", "materialUI", "sass"]}
                />

                <Project 
                    projectUrl="https://github.com/devarshi-ap/password-strength"
                    title="Password Strength Checker"
                    description="Single Page App which determines a given password's strength based on length and contained-characters."
                    arr={["react", "sass"]}
                />

                <Project 
                    projectUrl="https://github.com/devarshi-ap/Consumer-Review-Sentiment-Analysis"
                    title="Text Sentiment Analyzer"
                    description="Determines the sentiment of a whole text using a NLP Sentiment Index."
                    arr={["java"]}
                />

                <Project 
                    projectUrl="https://github.com/devarshi-ap/Python-Projects/blob/main/Folder%20Organizer/folder_organizer.py"
                    title="Folder Organizer Script"
                    description="A Python script that organizes a directory's files by creating subdirectories based on file ext."
                    arr={["python"]}
                />

                <Project 
                    projectUrl="https://github.com/devarshi-ap/Competitive-Programming"
                    title="Competitive Programming"
                    description="A competitive programming solutions library for a multitude of questions from DMOJ (Don Mills Online Judge)."
                    arr={["java", "python"]}
                />

            </div>
        </div>
    );
}

export default ProjectSection;