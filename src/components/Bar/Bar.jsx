import './Bar.css'
import ProjectButton from './ProjectButton/ProjectButton.jsx'

function Bar({buttonFunction,projects}) {

    return (
        <>
            <div className="bar-container">
                <img src="src/assets/images.jpg" alt="profile photo"></img>
                <section className="buttons">
                    <button className="create-project button" onClick={buttonFunction}>New Project</button>
                    {projects.map((project) => (
                        <ProjectButton
                            projectName={project[0]}
                        />
                    ))}
                </section>
            </div>
        </>
    )
}

export default Bar