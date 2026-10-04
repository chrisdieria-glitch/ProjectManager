import './Task.css'
import NewTaskCard from './NewTaskCard/NewTaskCard.jsx'
import TaskCard from './TaskCard/TaskCard.jsx'

function Tasks({tasks,buttonFunction}) {

    return (
        <>
            <header className="tasks__header">

                <h3 className="tasks__title">Tasks</h3>
                <button className="tasks__add" onClick={buttonFunction}>Add Task</button>
                <NewTaskCard/>

            </header>

            <section className="tasks__list">

                {tasks.map((task) => {

                    <TaskCard
                    taskName={taskName}
                    isComplete={state}
                    />

                })}

            </section>
                
        </>
    )
}

export default Tasks