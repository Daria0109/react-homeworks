import {Dispatch} from 'redux';
import {requestAPI} from '../api';

export const changeIsChecked = (isChecked: boolean) => ({
  type: 'CHANGE_IS_CHECKED', isChecked
} as const)
export const setErrorText = (errorText: string) => ({
  type: 'SET_ERROR_TEXT', errorText
} as const)
type ActionsType = ReturnType<typeof changeIsChecked> | ReturnType<typeof setErrorText>


export const sendPostRequest = (isChecked: boolean) => {
  return async (dispatch: Dispatch<ActionsType>) => {
    try {
      const response = await requestAPI.post(isChecked);
      dispatch(setErrorText(response.data.errorText));
    } catch(error) {
      console.log( {...error} );
      dispatch(setErrorText(error.response ? error.response.data.errorText : error.message))
    } finally {
      dispatch(changeIsChecked(isChecked));
    }
  }
}


const initialState = {
  isChecked: false,
  errorText: null as string | null
}
type RequestInitialState = typeof initialState;


export const requestReducer = (state: RequestInitialState = initialState, action: ActionsType): RequestInitialState => {
  switch (action.type) {
    case 'CHANGE_IS_CHECKED':
      return {
        ...state,
        isChecked: action.isChecked
      }
    case 'SET_ERROR_TEXT':
      return {
        ...state,
        errorText: action.errorText
      }

    default:
      return state
  }
}