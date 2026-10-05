import './NewTaskCard.css'

function NewTaskCard() {
    return (
        <>
            <div className="new-task-card">
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