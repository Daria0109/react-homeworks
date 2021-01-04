import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {sendPostRequest} from './bll/requestReducer';
import s from './HW13.module.css'

const Request = () => {
  const isChecked = useSelector<AppStoreType, boolean>(state => state.request.isChecked);
  const errorText = useSelector<AppStoreType, string | null>(state => state.request.errorText);
  const dispatch = useDispatch();


  const onClickHandler = () => {
    dispatch(sendPostRequest(!isChecked))
  }


  return <div className={s.block}>
    <SuperCheckbox checked={isChecked}/>
    <SuperButton onClick={onClickHandler}>Send Request</SuperButton>
    <span>{errorText}</span>
  </div>
}

export default Request;
