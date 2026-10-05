import './Task.css'
import NewTaskCard from './NewTaskCard/NewTaskCard.jsx'
import TaskCard from './TaskCard/TaskCard.jsx'
import { useState } from 'react'

function Tasks({tasks,buttonFunction,projectId}) {

    const [addTaskCard,setTaskCard] = useState('')

    return (
        <>
            <header className="tasks__header">
                <h3 className="tasks__title">Tasks</h3>
                <button 
                    className="btn btn--primary btn--sm" 
                    onClick={() => buttonFunction(setTaskCard)}
                >Add Task
                </button>
                {addTaskCard}
            </header>
            <section className="tasks__list">
                {tasks.map((task) => {
                    return (
                        <TaskCard
                            key={task.id}
                            taskName={task.title}
                            isComplete={task.state}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default Tasks