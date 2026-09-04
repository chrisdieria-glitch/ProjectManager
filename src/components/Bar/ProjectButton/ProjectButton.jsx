import "./ProjectButton.css"

function ProjectButton({buttonFunction,projectName,id}) {
    return (
        <>
            <button onClick={buttonFunction}>
                <strong>{projectName}</strong>
            </button>
        </>
    )
}