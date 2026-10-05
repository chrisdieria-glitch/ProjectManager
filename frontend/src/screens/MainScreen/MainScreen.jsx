import Bar from '../../components/Bar/Bar.jsx'
import Notes from '../../components/Notes/Notes.jsx'
import Project from "../../components/Project/Project.jsx"
import { NewProject } from "../../components/Project/Project-components.jsx"
import { useState } from 'react'
import './MainScreen.css'

function MainScreen() {

    /////  VARIABLES  //////

    const userId = localStorage.getItem("userId")

    let projectValues = []
    const [currentProject,setProject] = useState("") 
    const [projects,setProjects] = useState([])

    // clase para crear proyectos

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

    //////  FUNCTIONS  ////// 
    // funcion para crear proyecto

    const createProject = () => {
        setProject(<NewProject buttonFunction={saveProject}/>)
    }

    // funcion que despliega el proyecto

    const displayProject = (id) => {
        const project = projects.find(project => project.id === id);
        setProject(<Project 
                    projectName={project.name} 
                    projectDescription={project.description}    
                    projectGoals={project.goals} 
                    tasks={project.tasks}
                    />)
    }

    // Funcion que guarda los proyectos

    const saveProject = () => {
        let projectName = document.getElementById("nameOfTheProject").value
        let projectDescription = document.getElementById("descriptionOfProject").value
        let projectGoals = document.getElementById("goalsOfProject").value

        let project = new ProjectValues(projectName,projectDescription,projectGoals,[],[],crypto.randomUUID())
        setProjects([...projects, project])

        fetch("http://127.0.0.1:8000/create_project/",{
            method: "POST",
            body: JSON.stringify({
                name : projectName,
                description : projectDescription,
                goals : projectGoals,
                username : userId
            }),
            headers: {"Content-type" : "application/json"}
        })
        .then(res=>res.json())
        .then(res=>console.log(res.respuesta))
    }

    // DISENO

    return (
        <>
            <section className="main-screen">
                <Bar
                    projects={projects}
                    buttonFunction={createProject}
                    buttonProjectFunction={displayProject}
                />
                {currentProject}
                <input className="main-screen__search"></input>
                <Notes/>
            </section>
        </>
    )
}

export default MainScreen