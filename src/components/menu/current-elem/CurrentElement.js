import CurrentElementView from "./CurrentElementView";

const CurrentElement = ({ currentItem }) => {
    return (
        <>
            {
                currentItem.map(item => {
                    return (
                        <CurrentElementView 
                            key={item.id} 
                            item={item} 
                            currentItem={currentItem}
                        />
                    )
                })
            }
        </>
    )
}

export default CurrentElement;