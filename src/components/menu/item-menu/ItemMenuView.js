const ItemMenuView = ({ item, getCurrentItemFromList }) => {
    const { id, photo, title, descr, price } = item;

    return (
        <div 
            className="menu_descr" 
            key={id}
            onClick={() => getCurrentItemFromList(id)}
        >  
            <div className="menu_descr_container">
                <div>
                    <img src={photo} alt="star" />
                </div>
                
                <div>
                    <span>{title}</span><br/>
                    <p>{descr}</p>
                </div>
            </div>

            <div>
                <span>{price} $</span>
            </div>
        </div>
    )
}

export default ItemMenuView;