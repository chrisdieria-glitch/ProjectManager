import { useState } from 'react'
import { Tasks, Description, Journal } from './Project-components'

function Project({projectName,projectDescription,projectGoals,tasks,id}) {
    
    const [currentTab, setCurrentTab] = useState(<Tasks/>)
    const tabs = {
        task: <Tasks tasks={tasks}/>,
        description: <Description description={projectDescription} goals={projectGoals}/>,
        journal: <Journal/>
    }

    return (
        <section className="project">

            <header className="project__header">

                <h2 className="project__title">{projectName}</h2>

                <select className="select" onChange={(e) => {
                    setCurrentTab(e.target.value)
                }}> 
                    <option className="project__tab-option" value="task">Task</option>
                    <option className="project__tab-option" value="description">Description</option>
                    <option className="project__tab-option" value="journal">Journal</option>
                </select>

            </header>
            
            {tabs[currentTab]}

        </section>
    )
}

export default Project