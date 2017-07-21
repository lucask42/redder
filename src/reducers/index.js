import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './auth_reducer';
import GetReddit from './GetReddit';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
  auth: AuthReducer,
  getReddit: GetReddit
});
