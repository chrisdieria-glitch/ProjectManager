import Bar from '../../components/Bar/Bar.jsx'
import Notes from '../../components/Notes/Notes.jsx'
import Project from "../../components/Project/Project.jsx"
import { NewProject } from "../../components/Project/Project-components.jsx"
import { useState } from 'react'
import './MainScreen.css'

function Main() {

    class ProjectValues {
        constructor(name,description,goals,tasks,journal,id) {
            this.name = name;
            this.description = description;
            this.goals = goals;
            this.tasks = tasks;
            this.journal = journal;
            this.id = id;
        }
    }

    let projectValues = []
    const [currentProject,setProject] = useState("") 
    const [projects,setProjects] = useState([])

    const createProject = () => setProject(<NewProject buttonFunction={saveProject}/>)

    const displayProject = (id) => {
        const project = projects.find(project => project.id === id);
        setProject(<Project projectName={project.name} projectDescription={project.description} projectGoals={project.goals} />)
    }

    const saveProject = () => {
        let projectName = document.getElementById("nameOfTheProject").value
        let projectDescription = document.getElementById("descriptionOfProject").value
        let projectGoals = document.getElementById("goalsOfProject").value

        let project = new ProjectValues(projectName,projectDescription,projectGoals,undefined,undefined,crypto.randomUUID())
        setProjects([...projects, project])
    }

    return (
        <>
            <section className="container">
                <Bar
                    projects={projects}
                    buttonFunction={createProject}
                    buttonProjectFunction={displayProject}
                />
                {currentProject}
                <input className="browser"></input>
                <Notes/>
            </section>
        </>
    )
}

export default Main