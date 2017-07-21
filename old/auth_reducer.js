import { TEST_ACTION } from '../actions';

const INTIAL_STATE = { message: '' };

export default function (state = INTIAL_STATE, action) {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
}
