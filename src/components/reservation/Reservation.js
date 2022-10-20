import './Reservation.scss';

const Reservation = () => {
    return (
        <div className="reservation">
            <div className="reservation_container">
                <div className="reservation_titles">
                    <div>
                        <span>Reservation</span>
                    </div>

                    <div>
                        <h1>Book Your Table</h1>
                    </div>
                </div>

                <div className="reservation_input">
                    <div className="reservation_input_user">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                    </div>

                    <div className="reservation_input_data">
                        <input type="text" placeholder="Person"/>
                        <input type="text" placeholder="Timing"/>
                        <input type="text" placeholder="Date"/>
                    </div>
                </div>

                <div className="reservation_btn">
                    <button>Book A Table</button>
                </div>
            </div>
        </div>
    )
}

export default Reservation;