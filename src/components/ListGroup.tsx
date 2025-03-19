function ListGroup() {
    // const items = ["Zürich", "Bern", "Basel", "Genf", "Lausanne", "Luzern", "St. Gallen", "Winterthur", "Lugano", "Biel/Bienne"];
    const items: string[] = []

    const message = items.length === 0 ? <p>No items found</p> : null

    return (
        <>
            <h1>List</h1>
            { message }
            <ul className="list-group">
                { items.map((item, index) => <li key={index} className="list-group-item">{item}</li>) }
            </ul>
        </>
    );
}

export default ListGroup;