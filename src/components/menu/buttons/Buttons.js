import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({ incDecCalc, filter, setFilter }) => {
    return (
        <div className="menu_btns">
            {
                // (filter === "all") ? ( 
                    <>
                        <button 
                            onClick={() => incDecCalc('minus')}>
                                <FontAwesomeIcon 
                                    icon={faAngleLeft} 
                                />
                        </button>
                        
                        <button 
                            onClick={() => incDecCalc('plus')}>
                                <FontAwesomeIcon 
                                    icon={faAngleRight} 
                                />
                        </button>
                    </> 
                //     ) : (

                //     <a   
                //         className="menu_btns_reset"
                //         onClick={() => setFilter('all')} 
                //     >
                //         reset filter
                //     </a>
                // )
            }
        </div>
    )
}

export default Buttons; 