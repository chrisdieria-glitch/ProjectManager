import Bar from '../../components/Bar/Bar.jsx'
import Notes from '../../components/Notes/Notes.jsx'
import Project from "../../components/Project/Project.jsx"
import './MainScreen.css'


function Main({currentProject}) {
    return (
        <>
            <section className="container">
                <Bar/>
                <Project
                projectName="Project Name"
                />
                <input className="browser"></input>
                <Notes/>
            </section>
        </>
    )
}

export default Main