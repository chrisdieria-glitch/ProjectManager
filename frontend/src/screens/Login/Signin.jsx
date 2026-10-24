import { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'

function Signin() {

    const isSignIn = localStorage.getItem("userId") !== null;

    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState(false)
    const [emailRegister, setEmailRegister] = useState(false)
    const [warningText,setWarningText] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        if (isSignIn == true) {
            navigate('/main')
        }
        else {
            sessionStorage.clear()
        }
    },[])
    

    function buttonFunction(event) {
        event.preventDefault()

        const username = document.getElementById('username')
        const email = document.getElementById('email')
        const password = document.getElementById('password')

        setLoading(true)

        fetch("http://127.0.0.1:8000/create_user/", {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                email: email.value,
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
                localStorage.setItem("username", res.username)
            }
            else {
                sessionStorage.setItem("userId", res.id)
                sessionStorage.setItem("username", res.username)
            }
            if (res.respuesta !== "User created") {
                setLoading(false)
                setFailed(true)
                setWarningText(res.respuesta)
            }
            else {
                // Cuando django response correctamente 
                navigate('/newuser')
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
                <h1 className="login-form__title">Get Sign in</h1>
                <h4 className="login-form__subtitle">And start manage your projects</h4>

                <section className="login-form__fields">
                    <input id="username" className="input" placeholder='username' required/>
                    <input id="email" className="input" placeholder='email' required />
                    <input id="password" className="input" placeholder='password' required/>
                </section>

                <section className="login_topics">
                    <div className="remember_login">
                        <p> You want to stay login?
                            <input id="stayLogin" className='confirm' type="checkbox"/>
                        </p>
                    </div>
                    <div className="log_in_goto">
                        <p> Are you already sign in?   
                            <button
                             onClick={() => {
                                navigate('/login')
                             }}
                             className="is_login_btn">
                             Log in
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
                        "Sign In"
                    )}
                </button>
            </form>
        </>
    )
}

export default Signin