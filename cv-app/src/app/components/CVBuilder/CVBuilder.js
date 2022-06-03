import { Component } from "react";
import ControlledList from "../ControlledList/ControlledList";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skill from "../Skill/Skill";
import Personal from "../Personal/Personal";
import PreviewCV from "../PreviewCV/PreviewCV";
import Slide from "../Slide/Slide";
import Slider from "../Slider/Slider";
import Project from "../Project/Project";

export default class CVBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {},
      experience: [{}],
      education: [{}],
      skills: [{}],
      projects: [{}],
    };
  }

  render() {
    const { personal, experience, education, skills, projects } = this.state;

    return (
      <Slider>
        <Slide title="Personal Info">
          <Personal info={personal} update={this.updatePersonal} />
        </Slide>

        <Slide title="Experience">
          <ExperienceList info={experience} update={this.updateExperience} />
        </Slide>

        <Slide title="Education">
          <EducationList info={education} update={this.updateEducation} />
        </Slide>

        <Slide title="Skills">
          <SkillsList info={skills} update={this.updateSkills} />
        </Slide>

        <Slide title="Projects">
          <ProjectsList info={projects} update={this.updateProjects} />
        </Slide>

        <Slide title="Preview CV">
          <PreviewCV info={this.state} />
          <button className="btn" onClick={this.loadExample}>
            Show Example
          </button>
        </Slide>
      </Slider>
    );
  }
  updatePersonal = (info) => this.setState({ personal: info });
  updateExperience = (info) => this.setState({ experience: info });
  updateEducation = (info) => this.setState({ education: info });
  updateSkills = (info) => this.setState({ skills: info });
  updateProjects = (info) => this.setState({ projects: info });

  loadExample = () => this.setState({ ...cvExample() });
}

function ExperienceList({ info, update }) {
  return <ControlledList type={<Experience />} info={info} update={update} />;
}

function EducationList({ info, update }) {
  return <ControlledList type={<Education />} info={info} update={update} />;
}
function SkillsList({ info, update }) {
  return <ControlledList type={<Skill />} info={info} update={update} />;
}
function ProjectsList({ info, update }) {
  return <ControlledList type={<Project />} info={info} update={update} />;
}

function cvExample() {
  return {
    personal: {
      firstName: "Mahmoud",
      lastName: "Elnagar",
      title: "Full-Stack Developer",
      phone: "+201009233595",
      address: "Menofia, Egypt",
      email: "mahmoud.elnagar1698@gmail.com",
      description:
        "Highly motivated Electrical Engineer with a lifelong learning mindset who is seeking a career in Software Engineering. very passionate about web development.",
    },
    experience: [
      {
        id: "0",
        position: "Full-Stack Developer...probably!",
        company: "My 1st Company",
        from: "Near Future",
        to: "Far Future",
        description:
          "If you want to hire me, contact me at https://www.linkedin.com/in/m-ngr/",
      },
    ],
    education: [
      {
        id: "0",
        university: "The Odin Project",
        course: "Full Stack JavaScript",
        from: "2022",
        to: "Present",
        description:
          "Free full stack curriculum and supported by a passionate open source community",
      },
      {
        id: "1",
        university: "Faculty of Engineering, MU",
        course: "Electrical Engineering",
        from: "2016",
        to: "2021",
        description: "A bachelor's degree in Electrical Engineering",
      },
    ],
    skills: [
      { id: "0", name: "HTML" },
      { id: "1", name: "CSS" },
      { id: "2", name: "JavaScript" },
      { id: "3", name: "TypeScript" },
      { id: "4", name: "React" },
      { id: "5", name: "Node.js" },
      { id: "6", name: "Express" },
      { id: "7", name: "MongoDB" },
      { id: "8", name: "PostgreSQL" },
    ],
    projects: [
      {
        id: "0",
        title: "Project #1",
        description: "Project 1 description",
        links: [
          { id: "0", title: "Live", url: "https://www.project1.com/" },
          { id: "1", title: "Repo", url: "https://www.github.com/..." },
        ],
      },
      {
        id: "1",
        title: "Project #2",
        description: "Project 2 description",
        links: [
          { id: "0", title: "Live", url: "https://www.project2.com/" },
          { id: "1", title: "Repo", url: "https://www.github.com/..." },
        ],
      },
      {
        id: "2",
        title: "Project #3",
        description: "Project 3 description",
        links: [
          { id: "0", title: "Live", url: "https://www.project3.com/" },
          { id: "1", title: "Repo", url: "https://www.github.com/..." },
        ],
      },
    ],
  };
}
