import Filter from '../../Models/Types/Filter';

export enum ActionType {
  SET = 'filter/SET',
}

export function SetData(filter: Filter) {
  return {
    type: ActionType.SET,
    payload: filter,
  };
}
