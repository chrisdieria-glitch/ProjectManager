import "./ProjectButton.css"

function ProjectButton({buttonFunction,projectName}) {
    return (
        <>
            <button className="projectButton" onClick={buttonFunction}>
                <span>{projectName}</span>
            </button>
        </>
    )
}

export default ProjectButton