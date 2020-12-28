import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css';
import theme from './../hw12/HW12.module.css';
import './../../fonts/static/Orbitron-Regular.ttf'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';

function Clock() {
  const mainTheme = useSelector<AppStoreType, string>(state => state.theme.mainTheme)
  const colorTheme = `${theme[mainTheme]} ${theme[mainTheme + '-text']}`;

  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId)
  }
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000);
    setTimerId(id);
  }

  const onMouseEnter = () => {
    setShow(true)
  };
  const onMouseLeave = () => {
    setShow(false)
  };

  const stringTime = date.toLocaleTimeString(); // fix with date
  const stringDate = date.toLocaleDateString(); // fix with date

  return (
    <div className={s.hw9}>
      <div className={s.container}>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave} className={s.time}>
          {stringTime}
        </div>

        {show && (
          <div className={s.date}>
            {stringDate}
          </div>
        )}

        <div className={s.buttons}>
          <SuperButton className={colorTheme} onClick={start}>Start</SuperButton>
          <SuperButton className={colorTheme} onClick={stop}>Stop</SuperButton>
        </div>
      </div>

    </div>
  );
}

export default Clock;