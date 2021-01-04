import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.css';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import theme from './../../../hw12/HW12.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  buttonStyle?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
  {
    buttonStyle, className,
    ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
  }
) => {
  const mainTheme = useSelector<AppStoreType, string>(state => state.theme.mainTheme);
  const colorTheme = `${theme[mainTheme]} ${theme[mainTheme + '-text']}`;

  const finalClassName = `${buttonStyle ? s.buttonStyle : s.default} ${colorTheme} ${className}`;

  return (
    <button
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
}

export default SuperButton;
