import Skill from "./Skill";

const SkillSection = (props) => {
    return(
        <div className="skills-section">
            <div className="header">Jack of Some Trades. Master of None.</div>
            <div className="skills-grid">

                <Skill
                    lang="js"
                    embedLink="https://img.icons8.com/color/80/000000/javascript--v1.png"
                    // embedLink="https://img.icons8.com/nolan/80/javascript.png"
                    skillName="JavaScript"
                />

                <Skill
                    lang="react"
                    embedLink="https://img.icons8.com/plasticine/80/000000/react.png"
                    // embedLink="https://img.icons8.com/nolan/80/react-native.png"
                    skillName="React"
                />

                <Skill
                    lang="jquery"
                    embedLink="https://img.icons8.com/ios-filled/80/000000/jquery.png"
                    skillName="Jquery"
                />

                <Skill
                    lang="node"
                    embedLink="https://img.icons8.com/color/80/000000/nodejs.png"
                    // embedLink="https://img.icons8.com/windows/80/000000/node-js.png"
                    skillName="NodeJs"
                />
                
                <Skill
                    lang="java"
                    // embedLink="https://img.icons8.com/nolan/80/java-coffee-cup-logo.png"
                    embedLink="https://img.icons8.com/color/80/000000/java-coffee-cup-logo--v1.png"
                    skillName="Java"
                />
                
                <Skill
                    lang="python"
                    // embedLink="https://img.icons8.com/color-glass/80/000000/python.png"
                    embedLink="https://img.icons8.com/color/80/000000/python--v1.png"
                    skillName="Python"
                />
                
                <Skill
                    lang="html"
                    embedLink="https://img.icons8.com/color/80/000000/html-5--v1.png"
                    // embedLink="https://img.icons8.com/nolan/80/html-5.png"
                    skillName="HTML"
                />
                
                <Skill
                    lang="css"
                    embedLink="https://img.icons8.com/color/80/000000/css3.png"
                    skillName="CSS"
                />

                <Skill
                    lang="sass"
                    embedLink="https://img.icons8.com/color/80/000000/sass.png"
                    skillName="SASS"
                />

                <Skill
                    lang="bulma"
                    embedLink="https://img.icons8.com/nolan/80/b.png"
                    skillName="Bulma"
                />

                <Skill
                    lang="git"
                    embedLink="https://img.icons8.com/color/80/000000/git.png"
                    // embedLink="https://img.icons8.com/nolan/80/git.png"
                    skillName="Git VCS"
                />
            </div>
        </div>
    );
}

export default SkillSection;