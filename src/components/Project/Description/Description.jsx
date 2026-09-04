import './Description.css'
import { useState } from 'react'

function Description({isNewDescription}) {

    const [newProject,setProject] = useState(isNewDescription)
    let inputClasses = newProject ? ["new-description","new-goals"] : ['description',"why-goals"]
    let placeHolders = newProject ? ["This project is about...","I want to achieve..."] : ["",""]

    return (
        <> 
            <section className="project-details">
                <h3>Project Details</h3>
                <textarea readOnly={!newProject} className={inputClasses[0]} placeHolder={placeHolders[0]}></textarea>
                <textarea readOnly={!newProject} className={inputClasses[1]} placeHolder={placeHolders[1]}></textarea>
            </section>
        </>
    )
}

export default Description