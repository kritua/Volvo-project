import { createAction } from 'redux-actions-helpers';

export const gamesToStore = createAction('GAMES_TO_STORE', (payload) => ({ payload }));

export const errorToStore = createAction('ERROR_TO_STORE', (payload) => ({ payload }));

export default {
    gamesToStore,
    errorToStore
}
