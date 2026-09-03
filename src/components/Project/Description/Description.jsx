import './Description.css'

function Description() {
    return (
        <> 
            <section className="project-details">
                <h3>Project Details</h3>
                <textarea className="description" placeHolder="This project is about..."></textarea>
                <textarea className="why-goals" placeHolder="I want to achieve..."></textarea>
            </section>
        </>
    )
}

export default Description