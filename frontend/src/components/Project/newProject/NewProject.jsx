import './newProject.css'

function NewProject({buttonFunction}) {
    return (
        <>
            <>
                <section className="new-project-container">

                    <header>

                        <input id="nameOfTheProject" placeholder="Project Name"></input>

                        <button className="save-button" onClick={buttonFunction}>Save Project</button>

                    </header>
                    
                    <section className="details">

                        <textarea id="descriptionOfProject" className="description"></textarea>

                        <textarea id="goalsOfProject" className="goals"></textarea>

                    </section>

                </section>
            </>
        </>
    )
}

export default NewProject