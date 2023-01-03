const ItemProductDescr = ({ compound }) => {
    return (
        <div className="menu_descr_item">
            <div>
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
            </div>

            <div>
                <div className="menu_order">
                    <button
                        // onClick={() => orderCurrentProduct(item)}
                    >
                        Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemProductDescr;