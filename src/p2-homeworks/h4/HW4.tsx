import React, {ChangeEvent, useState} from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import s from './HW4.module.css';
import theme from './../hw12/HW12.module.css';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';


function HW4() {
  const mainTheme = useSelector<AppStoreType, string>(state => state.theme.mainTheme)
  const colorTheme = `${theme[mainTheme]} ${theme[mainTheme + '-text']}`;

  const [text, setText] = useState<string>('');
  const error = text ? '' : 'Enter your text...';
  const showAlert = () => {
    if (error) {
      alert('введите текст...');
    } else {
      alert(text); // если нет ошибки показать текст
    }
  }

  const [checked, setChecked] = useState<boolean>(false);
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.currentTarget.checked);

  return (
    <div>
      <hr/>
      homeworks 4

      <div className={s.column}>
        {/*should work (должно работать)*/}
        <SuperInputText
          value={text}
          onChangeText={setText}
          onEnter={showAlert}
          error={error}
          className={s.blueStyle}
        />

        <SuperButton className={colorTheme} buttonStyle={true} onClick={showAlert}>delete</SuperButton>

        {/*should work (должно работать)*/}
        <SuperCheckbox
          checked={checked}
          onChangeChecked={setChecked}
        >
          I'm super checkbox {/*// этот текст попадёт в children*/}
        </SuperCheckbox>

        {/*// onChange тоже должен работать*/}
        <SuperCheckbox checked={checked} onChange={testOnChange}/>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperInputText/>*/}
      {/*<AlternativeSuperButton/>*/}
      {/*<AlternativeSuperCheckbox/>*/}
      <hr/>
    </div>
  );
}

export default HW4;
