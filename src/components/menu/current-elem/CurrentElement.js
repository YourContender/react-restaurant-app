const CurrentElement = ({ item }) => {
    return (
        <div className="menu_target" key={item.id}>
            <div>
                <h4>{item.title}</h4>
                <span>{item.descr}</span>
            </div>

            <div className="menu_target_compound">
                <img src={item.photo} alt="current" />

                <div>
                    <ul>
                        <li>apple</li>
                        <li>milk</li>
                        <li>coffee</li>
                        <li>juice</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CurrentElement;