import axios from 'axios';
import { SAVE_VISITOR, FETCH_VISITORS } from './types';

export function saveVisitor(visitor) {
    console.log(visitor);
    return {
        type: SAVE_VISITOR,
        payload: visitor
    }
}

export function fetchVisitors() {
    const response = axios.get('http://jsonplaceholder.typicode.com/visitors');

    return {
        type: FETCH_VISITORS,
        payload: response
    };
}
