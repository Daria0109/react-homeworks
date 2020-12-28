import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {themeReducer} from './bll/themeReducer';


const rootReducer = combineReducers({
  theme: themeReducer
})

const initialState = {
  theme: {
    themes: ['dark', 'white', 'purple', 'blue', 'orange', 'red', 'some'] as Array<string>,
    mainTheme: 'some'
  }
};

type StoryStateType = ReturnType<typeof rootReducer>

export const storyBookStore = createStore(rootReducer, initialState as StoryStateType);


export const StoreProviderDecorator = (storyFn: Function) => {
  return <Provider store={storyBookStore}>{storyFn()}</Provider>
}