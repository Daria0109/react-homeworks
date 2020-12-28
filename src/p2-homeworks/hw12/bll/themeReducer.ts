const initState = {
  themes: ['dark', 'white', 'purple', 'blue', 'orange', 'red', 'some'] as Array<string>,
  mainTheme: 'some'
};
export type StateThemesType = typeof initState;


export const themeReducer = (state: StateThemesType  = initState, action: ActionsType): StateThemesType => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {
        ...state,
        mainTheme: action.newTheme
      };
    }
    default: return state;
  }
};

export const changeTheme = (newTheme: string) => (
  {type: 'CHANGE_THEME', newTheme} as const
);
export type ActionsType = ReturnType<typeof changeTheme>