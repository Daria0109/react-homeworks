import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeTheme} from './bll/themeReducer';


function HW12() {
  const mainTheme = useSelector<AppStoreType, string>(state => state.theme.mainTheme);
  const themes = useSelector<AppStoreType, Array<string>>(state => state.theme.themes);
  const dispatch = useDispatch();

  const onChangeCallback = (newTheme: string) => {
    dispatch(changeTheme(newTheme))
  }

  return (
      <div className={s[mainTheme]}>
        <hr/>
        <div className={s.container}>
          <span className={s[mainTheme + '-text']}>
                homeworks 12
            </span>

          {/*should work (должно работать)*/}
          <div className={s.radioBlock}>
            <SuperRadio name={'radio'}
                        options={themes}
                        value={mainTheme}
                        onChangeOption={onChangeCallback}/>
          </div>
        </div>
        <hr/>
      </div>
  );
}

export default HW12;