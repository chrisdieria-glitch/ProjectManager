import './Notes.css'

function Notes() {
    return (
        <>
            <div className="notes">
                <div className="notes__header">
                    <h2 className="notes__title">Notes</h2>
                    <select className="notes__select"></select>
                </div>
                <textarea className="notes__textarea">

                </textarea>
            </div>
        </>
    )
}

export default Notes