const initState = {
  isLoading: false
};
type LoadingStateType = typeof initState;

export const loadingReducer = (state = initState, action: ActionType): LoadingStateType => {
  switch (action.type) {
    case 'TOGGLE_IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean) => ({type: 'TOGGLE_IS_LOADING', isLoading})
type ActionType = ReturnType<typeof loadingAC>