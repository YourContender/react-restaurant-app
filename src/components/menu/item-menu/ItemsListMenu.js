import ItemProduct from "./ItemProduct";

const ItemsListMenu = ({ testRedux, fragmentList }) => {
    // console.log('test Redux: ', testRedux ? testRedux : null)

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