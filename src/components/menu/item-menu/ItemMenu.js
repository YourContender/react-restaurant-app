import ItemMenuView from "./ItemMenuView";

const ItemMenu = ({ fragmentList, setCurrentId }) => {
    return (
        <>
            {
                fragmentList.map(item => {
                    return (
                        <ItemMenuView 
                            item={item} 
                            key={item.id}
                            setCurrentId={setCurrentId}
                        />
                    )
                })
            }   
        </>
    )
}

export default ItemMenu;