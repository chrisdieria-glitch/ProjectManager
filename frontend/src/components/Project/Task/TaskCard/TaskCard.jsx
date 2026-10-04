import './TaskCard.css'

function TaskCard({taskName,description,isComplete}) {
    return (
        <>
            <div className="task-card">
                <input className="task-card__checkbox" type="checkbox"></input>
                <aside className="task-card__body">
                    <strong className="task-card__title">{taskName}</strong>
                    <span className="task-card__description">{description}</span>
                </aside>
            </div>
        </>
    )
}

export default TaskCard