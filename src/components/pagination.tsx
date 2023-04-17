export default function Pagination({prev, next, onPrevious, onNext}:any) {

    const toPrevPage = () => { onPrevious() }
    const toNextPage = () => { onNext() }

    return (
        <div className="pagination_container">
            { prev ? (<button onClick={toPrevPage} className="pagination_button" type="button">Prev</button>) : null}
            { next ? (<button onClick={toNextPage} className="pagination_button" type="button">Next</button>) : null}         
        </div>
    )
}