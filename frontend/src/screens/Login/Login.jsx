import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'

function Login() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

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
            console.log(res.respuesta)

            // Cuando django response correctamente 
            navigate('/newuser')
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
                    <input id="username" className='login-form__field login-form__field--username' placeholder='username' required/>
                    <input id="email" className='login-form__field login-form__field--email' placeholder='email' required />
                    <input id="password" className='login-form__field login-form__field--password' placeholder='password' required/>
                    <input type="checkbox" id="rememberUser" className="login-form__remember"/> 
                </section>  
                <button
                    type="submit"
                    disabled={loading}
                    className="login-form__submit"
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

export default Login