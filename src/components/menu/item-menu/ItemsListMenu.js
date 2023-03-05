import ItemProduct from "./ItemProduct";

const ItemsListMenu = ({ fragmentList }) => {
    
    return (
        <>
            {
                fragmentList ? fragmentList.map(item => {
                    return (
                        <ItemProduct
                            item={item} 
                            key={item.id}
                        />
                    )
                }) : null
            }   
        </>
    )
}

export default ItemsListMenu;