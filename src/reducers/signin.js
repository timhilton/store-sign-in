import { SAVE_VISITOR, FETCH_VISITORS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case SAVE_VISITOR:
            return [...state, action.payload];
        case FETCH_VISITORS:
            const visitors = action.payload.data.map(visitor => visitor);
            return [...state, ...visitors];
        default:
            return state;
    }
};
