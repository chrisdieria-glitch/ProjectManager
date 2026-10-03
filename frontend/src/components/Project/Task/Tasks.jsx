import './Task.css'
import NewTaskCard from './NewTaskCard/NewTaskCard.jsx'
import TaskCard from './TaskCard/TaskCard.jsx'

function Tasks({tasks,buttonFunction}) {

    return (
        <>
            <header>

                <h3>Tasks</h3>
                <button onClick={buttonFunction}>Add Task</button>
                <NewTaskCard/>

            </header>

            <section>

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