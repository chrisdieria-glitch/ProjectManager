import './Description.css'
import { useState } from 'react'

function Description({description,goals}) {

    return (
        <> 
            <section className="description">
                <h3 className="description__title">Project Details</h3>
                <label className="description__label">Description</label>
                <p className="description__text">{description}</p>
                <p className="description__text">{goals}</p>
            </section>
        </>
    )
}

export default Description