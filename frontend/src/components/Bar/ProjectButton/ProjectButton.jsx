import "./ProjectButton.css"

function ProjectButton({buttonFunction,projectName,id}) {
    return (
        <>
            <button id={id} className="project-button" onClick={() => buttonFunction(id)}>
                <span className="project-button__name">{projectName}</span>
            </button>
        </>
    )
}

export default ProjectButton