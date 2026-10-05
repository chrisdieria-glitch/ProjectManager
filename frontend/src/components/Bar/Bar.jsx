import './Bar.css'
import ProjectButton from './ProjectButton/ProjectButton.jsx'

function Bar({buttonFunction,projects,buttonProjectFunction}) {

    return (
        <>
            <div className="bar main-screen__bar">
                <img className="bar__avatar" src="src/assets/images.jpg" alt="profile photo"></img>

                <button className="btn btn--primary btn--block" onClick={buttonFunction}>
                    New Project
                </button>

                <section className="bar__list">
                    {projects.map((project) => (
                        <ProjectButton
                            projectName={project.name}
                            key={project.id}
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