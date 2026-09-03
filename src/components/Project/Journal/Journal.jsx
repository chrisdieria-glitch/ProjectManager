import './Journal.css'
import DayCard from "./DayCard/DayCard.jsx"

function Journal({days}) {
    return (
        <>
            <header>
                <h3>Journal</h3>
            </header>
            <section>
                <DayCard
                day="September 3, 2026"
                />
            </section>
        </>
    )
}

export default Journal