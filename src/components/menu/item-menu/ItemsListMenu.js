import ItemProduct from "./ItemProduct";

const ItemsListMenu = ({ fragmentList }) => {
    return (
        <>
            {
                fragmentList.map(item => {
                    return (
                        <ItemProduct
                            item={item} 
                            key={item.id}
                        />
                    )
                })
            }   
        </>
    )
}

export default ItemsListMenu;