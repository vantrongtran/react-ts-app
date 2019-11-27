import { ApplicationState } from '../../types';

export const loginSelector = (state: ApplicationState) => state.global.currentUser
