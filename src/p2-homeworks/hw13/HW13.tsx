import React from 'react';
import Request from './Request';
import s from './HW13.module.css'

function HW13() {
  return (
    <div>
      <hr/>

      <p>homeworks 13</p>

      {/*should work (должно работать)*/}
      <div className={s.hw13}>
      <Request/>
      </div>

      <hr/>
      <hr/>
    </div>
  );
}

export default HW13;