import React, {useState} from 'react';
import {homeWorkReducer} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './HW8.module.css';
import theme from './../hw12/HW12.module.css';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';

export type ManType = {
  _id: number
  name: string
  age: number
}
export type InitialPeopleType = Array<ManType>;

const initialPeople: InitialPeopleType = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  const mainTheme = useSelector<AppStoreType, string>(state => state.theme.mainTheme);
  const colorTheme = `${theme[mainTheme]} ${theme[mainTheme + '-text']}`;

  const [people, setPeople] = useState<InitialPeopleType>(initialPeople);

  const finalPeople = people.map(p => (
    <div key={p._id} className={s.row}>
      <div className={s.name_item}>
        <span className={s.span}>name</span>
        <div className={s.name}>{p.name}</div>
      </div>

      <div className={s.age_item}>
        <span className={s.span}>age</span>
        <div className={s.age}>{p.age}</div>
      </div>
      </div>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
  const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

  return (
    <div>
      <hr/>
      homeworks 8

      <div className={s.block}>{/*should work (должно работать)*/}

        {finalPeople}
        <div className={s.buttons}>
          <div className={s.btn}><SuperButton className={colorTheme} onClick={sortUp}>sort up</SuperButton></div>
          <div className={s.btn}><SuperButton className={colorTheme} onClick={sortDown}>sort down</SuperButton></div>
          <div className={s.btn}><SuperButton className={colorTheme} onClick={check18}>check 18</SuperButton></div>
        </div>
      </div>
        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativePeople/>*/}
        <hr/>

    </div>
  );
}

export default HW8;
