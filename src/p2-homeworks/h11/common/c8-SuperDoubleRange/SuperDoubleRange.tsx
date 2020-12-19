import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import Slider from '@material-ui/core/Slider';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange: (values: Array<number>) => void
  values: number | number[]
  // min, max, step, disable, ...
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0c2143',
    }
  }
});

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {onChangeRange, values, className}) => {


  const onChangeCallback = (e: ChangeEvent<{}>, value: number | Array<number>) => {
    onChangeRange(value as Array<number>);
  }

  return(
  <ThemeProvider theme={theme}>
      <Slider
        className={className}
        value={values}
        onChange={onChangeCallback}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        color='primary'/>
    </ThemeProvider>)
}

export default SuperDoubleRange;