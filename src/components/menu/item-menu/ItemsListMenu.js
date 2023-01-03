import ItemMenuView from "./ItemProduct";

const ItemsListMenu = ({ fragmentList, targetCurrentElement }) => {
    return (
        <>
            {
                fragmentList.map(item => {
                    return (
                        <ItemMenuView 
                            item={item} 
                            key={item.id}
                            targetCurrentElement={targetCurrentElement}
                        />
                    )
                })
            }   
        </>
    )
}

export default ItemsListMenu;