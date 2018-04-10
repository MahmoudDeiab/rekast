import { FETCH_WEATHER_DATA } from '../actions/index';

export default function(state = [], action) {

  switch(action.type) {
    case FETCH_WEATHER_DATA:
      // ES5 way:
      // Use state.concat() which returns a new array
      return [action.payload.data, ...state];
  }

  return state;
}
