import React, {ChangeEvent, useState} from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {restoreState, saveState} from './localStorage/localStorage';
import s from './HW6.module.css'
import theme from './../hw12/HW12.module.css'
import AlternativeSuperEditableSpan from './common/c4-SuperEditableSpan/AlternativeSuperEditableSpan';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';

function HW6() {
  const mainTheme = useSelector<AppStoreType, string>(state => state.theme.mainTheme);
  const colorTheme = `${theme[mainTheme]} ${theme[mainTheme + '-text']}`;

  const [value, setValue] = useState<string>('');
  const [alternativeValue, setAlternativeValue] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);

  const [checked, setChecked] = useState<boolean>(false);
  const [checkboxText, setCheckboxText] = useState<string>('Activate edit mode')
  const toggleEditMode = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
    setEditMode(!editMode); // по нажатию на checkbox активируется режим редактирования span
    setCheckboxText(!editMode ? 'Save changes' : 'Activate edit mode'); // изменяется текст у checkbox
  }

  const save = () => {
    saveState<string>('editable-span-value', value);
  };
  const restore = () => {
    const state: string = restoreState<string>('editable-span-value', '')
    setValue(state);
  };

  return (
    <div>
      <hr/>
      homeworks 6
      <div className={s.hw6}>
        {/*should work (должно работать)*/}
        <div>
          <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            spanProps={{children: value ? undefined : 'Click and enter your text...'}}

          />
        </div>
        <SuperButton className={colorTheme} buttonStyle
                     onClick={save}>Save</SuperButton>
        <SuperButton className={colorTheme} buttonStyle
                     onClick={restore}>Restore</SuperButton>

        <hr/>
        {/*для личного творчества, могу проверить*/}
        <AlternativeSuperEditableSpan
          value={alternativeValue}
          onChangeText={setAlternativeValue}
          contentEditable={editMode}
          spanProps={{children: alternativeValue ? undefined : 'Enter text...'}}
          className={s.edit_icon}
        />
        <SuperCheckbox
          checked={checked}
          onChange={toggleEditMode}
        >
          {checkboxText} {/*// этот текст попадёт в children*/}
        </SuperCheckbox>

        <hr/>
      </div>
    </div>
  );
}

export default HW6;
