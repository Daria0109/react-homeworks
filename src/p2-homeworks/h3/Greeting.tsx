import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from "./Greeting.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type GreetingPropsType = DefaultInputPropsType & {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {type, name, setNameCallback, addUser, error, totalUsers, ...restProps} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : undefined;

    return (
        <div className={s.container}>
            <div className={s.input_box}>
                <input type={"text"}
                       value={name}
                       onChange={setNameCallback} placeholder={'User name'}
                       className={`${inputClass} ${s.input}`}/>
                <span className={s.error_text}>{error}</span>
            </div>
            <button className={s.btn} onClick={addUser}>Add</button>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
