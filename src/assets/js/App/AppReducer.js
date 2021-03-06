import * as types from './AppConstants';
import initialState from '../initialState';

// Se alguma ação termina com sucesso, subtrai um de ajaxCallsInProgress
function actionTypeEndsInSuccess(type) {
  // Checks if Action type string ends with _SUCCESS
  // Verifica se a string do tipo da ação termina com _SUCCESS
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
