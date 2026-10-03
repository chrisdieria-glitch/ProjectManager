import './NewTaskCard.css'

function NewTaskCard() {
    return (
        <>
            <div className="new-task-card">
                <strong>New Task</strong>
                <aside>
                    <input id="taskName"></input>
                    <input id="taskDescription"></input>
                </aside>
            </div>
        </>
    )
}

export default NewTaskCard