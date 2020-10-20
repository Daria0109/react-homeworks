import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from './HW2';
import style from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")};
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div className={style.affairs}>

            {mappedAffairs}

            <button className={style.filter_btn} onClick={setAll}>All</button>
            <button className={style.filter_btn} onClick={setHigh}>High</button>
            <button className={style.filter_btn} onClick={setMiddle}>Middle</button>
            <button className={style.filter_btn} onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
