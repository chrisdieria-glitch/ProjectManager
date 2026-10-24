import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [loading, setLoading] = useState(false)
    const [warningText,setWarningText] = useState("")
    const [failed, setFailed] = useState(false)

    const navigate = useNavigate()

    function buttonFunction(event) {
        event.preventDefault()

        const stayLogin = document.getElementById("stayLogin")
        const username = document.getElementById('username')
        const password = document.getElementById('password')

        setLoading(true)

        fetch("http://127.0.0.1:8000/log_in/", {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Error en el login")
            }
            return res.json()
        })
        .then(res => {
            console.log(res.id)
            if ( stayLogin.checked == true) {
                localStorage.setItem("userId", res.id)
            }
            else {
                sessionStorage.setItem("userId", res.id)
            }
            if (res.respuesta !== "Log in suscessful") {
                setLoading(false)
                setFailed(true)
                setWarningText(res.respuesta)
            }
            else {
                navigate('/main')
            }
        })
        .catch(error => {
            console.error(error)
            setLoading(false)
        })
    }

    return (
        <>
            <form className="login-form" onSubmit={buttonFunction}>
                <h1 className="login-form__title">Log in</h1>
                <h4 className="login-form__subtitle">Continue manage your projects</h4>
                <section className="login-form__fields">
                    <input id="username" className="input" placeholder='username' required/>
                    <input id="password" className="input" placeholder='password' required/>
                </section>
                <section className="login_topics">
                    <div className="remember_login">
                        <p> You want to stay login?
                            <input id="stayLogin" className='confirm' type="checkbox"/>
                        </p>
                    </div>
                    <div className="log_in_goto">
                        <p> Are you not log in?   
                            <button
                            onClick={() => {
                                navigate('/')
                            }} 
                            className="is_login_btn">
                            Sign in
                        </button>
                        </p>
                    </div>
                </section>
                <div>
                    {failed ? (
                        <span className='warning'>{warningText}</span>
                    ):("")}
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn--primary btn--block login-form__submit"
                >
                    {loading ? (
                        <span className="login-form__spinner"></span>
                    ):(
                        "Log In"
                    )}
                </button>
            </form>
        </>
    )
}

export default Login