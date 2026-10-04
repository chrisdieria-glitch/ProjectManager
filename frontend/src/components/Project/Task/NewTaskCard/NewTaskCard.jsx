import './NewTaskCard.css'

function NewTaskCard() {
    return (
        <>
            <div className="new-task-card">
                <strong className="new-task-card__title">New Task</strong>
                <aside className="new-task-card__fields">
                    <input id="taskName" className="new-task-card__name"></input>
                    <input id="taskDescription" className="new-task-card__description"></input>
                </aside>
            </div>
        </>
    )
}

export default NewTaskCard