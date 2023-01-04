const ItemProductDescr = ({ compound, orderCurrentProduct }) => {
    return (
        <div className="menu_descr_item">
            <ul>
                {
                    compound.map(elem => {
                        return (
                            <li key={elem}>
                                {elem}
                            </li>
                        )
                    })
                }
            </ul>

            <div>
                <div className="menu_order">
                    <button
                        onClick={() => orderCurrentProduct()}
                    >
                        Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemProductDescr;