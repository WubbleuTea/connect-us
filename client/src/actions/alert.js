import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// Thunk middleware lets us do the double arrow
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  // sets a random id for each alert
  const id = uuidv4();
  // Sends the information to Alert.js to be set if called
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  // Logs out a user if they are logged in too long
  //is attached to the setAlert so it will happen automatically
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
