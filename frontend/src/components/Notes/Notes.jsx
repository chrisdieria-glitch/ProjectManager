import './Notes.css'

function Notes() {
    return (
        <>
            <div className="notes">
                <div className="notes__header">
                    <h2 className="notes__title">Notes</h2>
                    <select className="select"></select>
                </div>

                <textarea className="textarea notes__textarea">

                </textarea>
            </div>
        </>
    )
}

export default Notes