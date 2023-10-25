import { configureStore } from '@reduxjs/toolkit';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment_count':
            return {
                ...state,
                count: state.count + 1
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