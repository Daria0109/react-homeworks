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
        <div className={style.block}>
            <div className={style.row}>
                <div className={style.affair}>{props.affair.name}</div>
                <div className={style.priority}>{props.affair.priority}</div>
                <div className={style.del_btn}>
                    <button className={style.btn} onClick={deleteCallback}>X</button>
                </div>
            </div>


        </div>
    );
}

export default Affair;
