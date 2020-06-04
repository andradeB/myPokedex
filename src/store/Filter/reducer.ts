import Filter from '../../Models/Types/Filter';
import Action from '../Types/Action';
import {ActionType} from './actions';
import Sort from '../../Models/Types/Sort';

const initialState = (function () {
  const data = new Filter();

  data.sort = Sort.Smallest;
  data.generation = 1;

  return data;
})();

export default function reducer(
  state = initialState,
  action: Action<ActionType, Filter>,
) {
  switch (action.type) {
    case ActionType.SET:
      return action.payload;
    default:
      return state;
  }
}
