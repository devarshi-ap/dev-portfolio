const Project = (props) => {

    const logos = {
        js: 'fab fa-js-square project-tool-icon',
        react: 'fab fa-react project-tool-icon',
        node: 'fab fa-node-js project-tool-icon',
        html: 'fab fa-html5 project-tool-icon',
        css: 'fab fa-css3-alt project-tool-icon',
        sass: 'fab fa-sass project-tool-icon',
        java: 'fab fa-java project-tool-icon',
        python: 'fab fa-python project-tool-icon',
        materialUI: 'fab fa-uikit project-tool-icon'
    }

    let icons = props.arr.map((item, x) => <i className={logos[item]} key={x}/>);

    return (
        <div className="project">
            <a href={props.projectUrl}>
                <div className="project-content">
                    <div className="project-title">{props.title}</div>
                    <div className="project-about">{props.description}</div>
                    <div className="project-tools">{icons}</div>
                </div>
            </a>
        </div>
    );
}

export default Project;