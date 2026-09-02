import Bar from '../../components/Bar/Bar.jsx'
import Notes from '../../components/Notes/Notes.jsx'
import './MainScreen.css'

function Main() {
    return (
        <>
            <section className="container">
                <Bar/>
                <input className="browser"></input>
                <Notes/>
            </section>
        </>
    )
}

export default Main