import "./ProjectButton.css"

function ProjectButton({buttonFunction,projectName,id}) {
    return (
        <>
            <button className="projectButton" onClick={buttonFunction}>
                <span>{projectName}</span>
            </button>
        </>
    )
}

export default ProjectButton