import {combineReducers} from 'redux';
import systemReducer from '@app/redux/system/system.slice';
import onboardReducer from '@app/redux/onboard/onboard.slice';

export type AppState = ReturnType<typeof appReducers>;

export const appReducers = combineReducers({
  system: systemReducer,
  onboard: onboardReducer,
});
