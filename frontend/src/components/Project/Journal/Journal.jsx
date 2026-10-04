import './Journal.css'
import DayCard from "./DayCard/DayCard.jsx"

function Journal({days}) {
    return (
        <>
            <header className="journal__header">
                <h3 className="journal__title">Journal</h3>
            </header>
            <section className="journal__list">
                <DayCard
                day="September 3, 2026"
                />
            </section>
        </>
    )
}

export default Journal