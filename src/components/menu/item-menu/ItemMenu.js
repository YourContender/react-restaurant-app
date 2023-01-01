import ItemMenuView from "./ItemMenuView";

const ItemMenu = ({ fragmentList, targetCurrentElement }) => {
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

export default ItemMenu;