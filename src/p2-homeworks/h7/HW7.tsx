import React, {useState} from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';
import s from './NW7.module.css'

const arr = ['Tokyo', 'Delhi', 'Shanghai', 'Mexico City', 'San Paulo', 'Mumbai', 'Cairo'];

function HW7() {
  const [value, onChangeOption] = useState(arr[1]);

  return (
    <div>
      <hr/>

      <p>homeworks 7</p>

      {/*should work (должно работать)*/}
      <div className={s.hw7}>
        <div>
          <SuperSelect
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>
        <div>
          <SuperRadio
            name={'radio'}
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperSelect/>*/}
      {/*<AlternativeSuperRadio/>*/}
      <hr/>
    </div>
  );
}

export default HW7;
