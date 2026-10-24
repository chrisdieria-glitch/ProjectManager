import './NewUW.css'
import { useNavigate } from 'react-router-dom'

function NewUW() {

    const navigate = useNavigate()
    const username = localStorage.getItem('username') || sessionStorage.getItem("username")

    return (
        <>
            <article className="welcome-card__new-user">
                <h1 className="welcome-card__title">Welcome {username} to ProjectManager</h1>
                <p className="welcome-card__text">Your account has been successfully created, to get started press on the button below</p>

                <button className="btn btn--primary welcome-card__button" onClick={() => {
                    navigate("/main")
                }}>
                    Create my first project
                </button>
            </article>
        </>
    )
}

export default NewUW