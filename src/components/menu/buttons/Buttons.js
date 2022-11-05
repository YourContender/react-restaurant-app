import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({ incDecCalc }) => {
    return (
        <div className="menu_btns">
            <button >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            
            <button onClick={() => incDecCalc()}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    )
}

export default Buttons; 