import Bar from '../../components/Bar/Bar.jsx'
import Notes from '../../components/Notes/Notes.jsx'
import Project from "../../components/Project/Project.jsx"
import { NewProject } from "../../components/Project/Project-components.jsx"
import { useEffect,useState } from 'react'
import './MainScreen.css'
import NewTaskCard from '../../components/Project/Task/NewTaskCard/NewTaskCard.jsx'



function MainScreen() {

    const [addTaskCard, setTaskCard] = useState("");

    /////  VARIABLES  //////

    let userId
    const [currentProject,setProject] = useState('')
    const [projects,setProjects] = useState([])
    const [tasks,setTasks] = useState([])
    if ( localStorage.getItem("userId") !== null) {
        userId = localStorage.getItem("userId")
    }
    else if ( sessionStorage.getItem("userId") !== null ) {
        userId = sessionStorage.getItem("userId")
    }

    console.log(userId)

    const getProjects = () => {
         fetch("http://127.0.0.1:8000/send_projects/", {
             method: "POST",
             body: JSON.stringify({
                 username: userId
             }),
             headers: {
                "Content-type": "application/json"
             }
         })
        .then(res => res.json())
        .then(res => {
             setTasks(res.tasks)
             setProjects(res.proyectos)
             console.log(res.tasks)
             console.log(res.proyectos)
         })
     }

    useEffect(() => {
        getProjects()
    },[])

    //////  FUNCTIONS  ////// 
    // funcion para crear proyecto

    const createProject = () => {
        setProject(<NewProject buttonFunction={saveProject}/>)
    } 

    const createTask = (setTaskCard,projectId) => {
        console.log(projectId)
        setTaskCard(<NewTaskCard buttonFunction={saveTask} projectId={projectId} setTaskCard={setTaskCard}/>)
    }

    function saveTask(projectId) {

        console.log("PROJECT ID:", projectId);

        const taskName = document.getElementById("taskName").value
        const taskDescription = document.getElementById("taskDescription").value

        fetch("http://127.0.0.1:8000/create_task/",{
            method: "POST",
            body: JSON.stringify({
                title : taskName,
                description : taskDescription, 
                project_id : projectId
            }),
            headers: {"Content-type" : "application/json"}
        })
        .then(res=>res.json())
        .then(res=>console.log(res.respuesta))

        getProjects()
        setTaskCard("")
    }

    // funcion que despliega el proyecto

    const displayProject = (id) => {
        const project = projects.find(project => project.id === id);
        const projectTasks = tasks.filter(task => task.project_id === id)
        
        setProject(
            <Project 
                projectName={project.name} 
                projectDescription={project.description}    
                projectGoals={project.goals} 
                tasks={projectTasks}
                taskButtonFunction={createTask}
                id={project.id}
            />)

    }

    // Funcion que guarda los proyectos

    const saveProject = () => {

        const projectName = document.getElementById("nameOfTheProject").value
        const projectDescription = document.getElementById("descriptionOfProject").value
        const projectGoals = document.getElementById("goalsOfProject").value

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

        setTimeout(
            getProjects(),
            1000
        )
        getProjects();
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
                <div className="projects">
                    {currentProject}
                </div>
                <input className="main-screen__search"></input>
                <Notes/>
            </section>
        </>
    )
}

export default MainScreen