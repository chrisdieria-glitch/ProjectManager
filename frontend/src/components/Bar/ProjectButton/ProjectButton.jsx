import "./ProjectButton.css"

function ProjectButton({buttonFunction,projectName,id}) {
    return (
        <>
            <button id={id} className="projectButton" onClick={() => buttonFunction(id)}>
                <span>{projectName}</span>
            </button>
        </>
    )
}

export default ProjectButton