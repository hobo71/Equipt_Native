import { combineReducers } from 'redux';

import session from './Session/reducer.js';
import notification from './Notification/reducer.js';
import sportingGood from './SportingGood/reducer.js';
import sportingGoods from './SportingGoods/reducer.js';
import rentals from './Rentals/reducer.js';
import rental from './Rental/reducer.js';
import loading from './Loading/reducer.js';

export default combineReducers({
  session,
  notification,
  sportingGood,
  sportingGoods,
  rental,
  rentals,
  loading
});
