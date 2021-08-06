import {REQUEST_TOP_STORIES} from '../constants';

export const requestTopStories = (payload: any) => ({
    type: REQUEST_TOP_STORIES,
    payload
});