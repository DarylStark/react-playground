import { Provider, useSelector } from 'react-redux';
import store from '../data_store.js';

function CountShower() {
    const count = useSelector((state) => state.count);
    return <p><b>count: </b>{count}</p>
}

function Button() {
    const handleClick = () => {
        store.dispatch({ type: 'increment_count', });
    }

    const button = <button onClick={handleClick}>Increase count</button>;
    return button;
}

export default function Counter() {
    return <Provider store={store}>
        <CountShower />
        <Button />
    </Provider>
}