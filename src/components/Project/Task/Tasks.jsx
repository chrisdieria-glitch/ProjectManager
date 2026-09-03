import './Task.css'
import TaskCard from './TaskCard/TaskCard.jsx'

function Tasks() {
    return (
        <>
            <header>
                <h3>Tasks</h3>
                <button>Add Task</button>
            </header>
            <section>
                <TaskCard
                taskName="Learn Python"
                description="I have to learn python with a course"
                />
            </section>
                
        </>
    )
}

export default Tasks