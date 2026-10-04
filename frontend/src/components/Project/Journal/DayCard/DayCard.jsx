import './DayCard.css'

function DayCard({day}) {
    return (
        <>
            <header className="day-card">
                <strong className="day-card__date">{day}</strong>
            </header>
            <textarea className="day-card__input">
                
            </textarea>
        </>
    )
}

export default DayCard