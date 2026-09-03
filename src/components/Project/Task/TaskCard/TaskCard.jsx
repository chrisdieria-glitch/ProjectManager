import './TaskCard.css'

function TaskCard({taskName,description,isComplete}) {
    return (
        <>
            <div className="task-card">
                <input type="checkbox"></input>
                <aside>
                    <strong>{taskName}</strong>
                    <span>{description}</span>
                </aside>
            </div>
        </>
    )
}

export default TaskCard