import './NewTaskCard.css'

function NewTaskCard({buttonFunction,projectId}) {
    return (
        <>
            <div className="new-task-card">
                <button onClick={buttonFunction}>Save Task</button>
                <strong className="new-task-card__title">New Task</strong>
                <aside className="new-task-card__fields">
                    <input id="taskName" className="input"></input>
                    <input id="taskDescription" className="input"></input>
                </aside>
            </div>
        </>
    )
}

export default NewTaskCard