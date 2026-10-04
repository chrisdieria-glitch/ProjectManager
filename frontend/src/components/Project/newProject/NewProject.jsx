import './newProject.css'

function NewProject({buttonFunction}) {
    return (
        <>
            <>
                <section className="new-project">

                    <header className="new-project__header">

                        <input id="nameOfTheProject" className="new-project__name" placeholder="Project Name"></input>

                        <button className="new-project__save" onClick={buttonFunction}>Save Project</button>

                    </header>
                    
                    <section className="new-project__fields">

                        <textarea id="descriptionOfProject" className="new-project__textarea new-project__description"></textarea>

                        <textarea id="goalsOfProject" className="new-project__textarea new-project__goals"></textarea>

                    </section>

                </section>
            </>
        </>
    )
}

export default NewProject