const DishesItem = ({ photo, title, price, descr }) => {
    return (
        <div className="dishes_menu_item">
            <div className="dishes_img">
                <img src={photo} alt="dishes 1" />
            </div>

            <div className="dishes_text">
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <span>{price}$</span>
                </div>
            </div>
            
            <div className="dishes_line"></div>

            <div className="dishes_descr">
                <p>
                    {descr}
                </p>
            </div>
        </div>
    )
}

export default DishesItem;