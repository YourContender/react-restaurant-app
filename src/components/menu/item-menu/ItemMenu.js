import ItemMenuView from "./ItemMenuView";

const ItemMenu = ({ fragmentList, getCurrentItemFromList }) => {
    return (
        <>
            {
                fragmentList.map(item => {
                    return (
                        <ItemMenuView 
                            item={item} 
                            key={item.id}
                            getCurrentItemFromList={getCurrentItemFromList}
                        />
                    )
                })
            }   
        </>
    )
}

export default ItemMenu;