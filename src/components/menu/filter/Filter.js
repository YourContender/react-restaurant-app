const Filter = ({ setFilter }) => {
    return (
        <div className="menu_filters">
            <div>
                <button
                    onClick={() => setFilter('all')}                            
                >
                    All
                </button>
            </div>
            <div>
                <button
                    onClick={() => setFilter('kitchen')}
                >
                    Kitchen
                </button>
            </div>
            <div>
                <button
                    onClick={() => setFilter('bar')}
                >
                    Bar
                </button>
            </div>
            <div>
                <button>Sale</button>
            </div>
        </div>
    )
}

export default Filter;