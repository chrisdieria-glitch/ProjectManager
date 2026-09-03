import { useState } from 'react'
import { Tasks, Description, Journal } from './Project-components'

function Project({projectName}) {

    const [currentTab, setCurrentTab] = useState(<Tasks/>)
    const tabs = {
        task: <Tasks/>,
        description: <Description/>,
        journal: <Journal/>
    }

    return (
        <section className="project-container">

            <header>

                <h2>{projectName}</h2>

                <select onChange={(e) => {
                    setCurrentTab(e.target.value)
                }}> 
                    <option value="task">Task</option>
                    <option value="description">Description</option>
                    <option value="journal">Journal</option>
                </select>

            </header>
            
            {tabs[currentTab]}

        </section>
    )
}

export default Project