import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import s from './common/c7-SuperRange/SuperRange.module.css'
import {Box} from '@material-ui/core';

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const changeRangeValues = (values: Array<number>) => {
    setValue1(values[0])
    setValue2(values[1])
  }

  return (
    <div>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div className={s.hw11}>
        <div className={s.singleRange}>
          <span className={s.rangeLable}>{value1}</span>
          <SuperRange value={value1}
                      onChangeRange={setValue1}/>
        </div>

        <Box display='flex' alignItems="center">
          <Box className={s.rangeLable}>{value1}</Box>
          <SuperDoubleRange className={s.doubleRange}
                            values={[value1, value2]}
                            onChangeRange={changeRangeValues}/>
          <Box className={s.rangeLable}>{value2}</Box>
        </Box>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  );
}

export default HW11;