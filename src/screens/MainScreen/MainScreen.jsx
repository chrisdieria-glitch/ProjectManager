import Bar from '../../components/Bar/Bar.jsx'
import Notes from '../../components/Notes/Notes.jsx'
import Project from "../../components/Project/Project.jsx"
import { NewProject } from "../../components/Project/Project-components.jsx"
import { useState } from 'react'
import './MainScreen.css'

function Main() {

    let projectValues = []
    const [projects,setProjects] = useState([])

    const createProject = () => {
        
    }

    const saveProject = () => {
        let projectName = document.getElementById("nameOfTheProject").value
        let projectDescription = document.getElementById("descriptionOfProject").value
        let projectGoals = document.getElementById("goalsOfProject").value

        projectValues = [projectName,projectDescription,projectGoals]
        let project = <Project projectName={projectValues[0]}/>

        setProjects([...projects, projectValues])
    }

    return (
        <>
            <section className="container">
                <Bar
                    projects={projects}
                    buttonFunction={createProject}
                />
                <NewProject
                    buttonFunction={saveProject}
                />
                <input className="browser"></input>
                <Notes/>
            </section>
        </>
    )
}

export default Main