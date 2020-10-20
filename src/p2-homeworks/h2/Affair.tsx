import React from 'react';
import {AffairType} from './HW2';
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div>
            My affair: {props.affair.name}. Priority - {props.affair.priority}
            <button className={style.delete_btn} onClick={deleteCallback}>x</button>
        </div>
    );
}

export default Affair;
