import Bar from '../../components/Bar/Bar.jsx'
import Notes from '../../components/Notes/Notes.jsx'
import Project from "../../components/Project/Project.jsx"
import './MainScreen.css'


function Main() {

    const createProject = () => {
        
    }

    return (
        <>
            <section className="container">
                <Bar/>
                <Project
                projectName="Project Name"
                id="1"
                />
                <input className="browser"></input>
                <Notes/>
            </section>
        </>
    )
}

export default Main