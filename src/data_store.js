import { configureStore } from '@reduxjs/toolkit';

const reducer = (state, action) => {
    console.log('reducer called');
    switch (action.type) {
        case 'increment_count':
            return {
                ...state,
                count: state.count + action.value
            };
        default:
            return state;
    }
}

const store = configureStore({
    reducer,
    preloadedState: {
        count: 0
    }
});

export default store;