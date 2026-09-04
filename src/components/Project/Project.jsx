import { useState } from 'react'
import { Tasks, Description, Journal } from './Project-components'

function Project({projectName,id,isNew}) {

    const [newProject,projectFill] = useState(isNew)

    const [currentTab, setCurrentTab] = useState(<Tasks/>)
    const tabs = {
        task: <Tasks/>,
        description: <Description/>,
        journal: <Journal/>
    }

    const save = () => {
        projectFill(!isNew)
    }

    if (newProject == isNew) {
        return (
            <>
                <section className="new-project-container">

                    <header>

                        <input placeholder="Project Name"></input>

                        <select onChange={(e) => {
                            setCurrentTab(e.target.value)
                        }}> 
                            <option value="description">Description</option>
                        </select>

                        <button className="save-button" onClick={save}>Save Project</button>

                    </header>
                    
                    <Description isNewDescription={isNew}/>

                </section>
            </>
        )
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