import './NewUW.css'

function NewUW({ buttonFunction }) {

    const username = "Chris12DF"

    return (
        <>
            <article className="welcome-card__new-user">
                <h1 className="welcome-card__title">Welcome {username} to ProjectManager</h1>
                <p className="welcome-card__text">Your account has been successfully created, to get started press on the button below</p>

                <button className="welcome-card__button" onClick={buttonFunction}>
                    Create my first project
                </button>
            </article>
        </>
    )
}

export default NewUW