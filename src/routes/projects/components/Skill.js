const Skill = (props) => {
    var divClass = `skill ${props.lang}`;

    return (
        <div className={divClass}>
            <img src={props.embedLink} alt={props.skillName} title={props.skillName}></img>
            <div className="skill-name">{props.skillName}</div>
        </div>
    );
}

export default Skill;