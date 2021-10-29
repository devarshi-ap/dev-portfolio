import Profile from "./Profile"
import OptionsBar from "./OptionsBar";
import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
import "../../../styles/main.css";

function Project() {
  return (
    <div className="wrap">
        <div className="left-column flex-centered">
            <Profile />
            <OptionsBar />
        </div>

        <div className="right-column flex-centered">
            <div className="content">
                <SkillSection />
                <ProjectSection />
            </div>
        </div>
    </div>
  );
}

export default Project;