import {REQUEST_TOP_STORIES} from '../constants';

interface AppReducerState {
    topStories: string[]
}

const initialAppState: AppReducerState = {
    topStories: []
};

export function appReducer(state = initialAppState, action: any) {
    switch(action.type) {
        case REQUEST_TOP_STORIES:
            return {...state, topStories: [...state.topStories, action.payload]}
        default:
            return state;
    }
}