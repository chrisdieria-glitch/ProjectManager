import './Bar.css'
import ProjectButton from './ProjectButton/ProjectButton.jsx'

function Bar({buttonFunction,projects,buttonProjectFunction}) {

    return (
        <>
            <div className="bar main-screen__bar">
                <img className="bar__avatar" src="src/assets/images.jpg" alt="profile photo"></img>
                <section className="bar__list">
                    <button className="bar__new-project" onClick={buttonFunction}>New Project</button>
                    {projects.map((project) => (
                        <ProjectButton
                            projectName={project.name}
                            id={project.id}
                            buttonFunction={buttonProjectFunction}
                        />
                    ))}
                </section>
            </div>
        </>
    )
}

export default Bar