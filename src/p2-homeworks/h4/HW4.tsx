import React, {ChangeEvent, useState} from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import s from './HW4.module.css';



function HW4() {
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

        <SuperButton buttonStyle={true} onClick={showAlert}>delete</SuperButton>

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
