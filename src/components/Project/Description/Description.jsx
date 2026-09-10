import './Description.css'
import { useState } from 'react'

function Description({description,goals}) {

    return (
        <> 
            <section className="project-details">
                <h3>Project Details</h3>
                <label>Description</label>
                <p>{description}</p>
                <p>{goals}</p>
            </section>
        </>
    )
}

export default Description