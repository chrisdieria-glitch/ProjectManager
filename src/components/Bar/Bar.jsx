import './Bar.css'

function Bar({buttonFunction}) {

    return (
        <>
            <div className="bar-container">
                <img src="src/assets/images.jpg" alt="profile photo"></img>
                <section className="buttons">
                    <button className="create-project button" onClick={buttonFunction}>New Project</button>
                </section>
            </div>
        </>
    )
}

export default Bar