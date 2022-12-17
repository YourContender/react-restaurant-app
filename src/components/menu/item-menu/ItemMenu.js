import ItemMenuView from "./ItemMenuView";

const ItemMenu = ({ fragmentList, getCurrentItemFromList }) => {
    console.log('test: ', fragmentList);
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