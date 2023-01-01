import { useSelector, useDispatch } from "react-redux";
import * as actions from '../actions';

const Counter = () => {
    const { counter } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>count: {counter}</h1>
            <button onClick={() => dispatch(actions.inc())}>INC</button>
            <button onClick={() => dispatch(actions.dec())}>DEC</button>
            <button onClick={() => dispatch(actions.rnd())}>RND</button>
        </div>
    )
}

export default Counter; 