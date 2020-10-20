import React from 'react';
import classes from './Message.module.css';

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt="Avatar"/>
            </div>
            <div className={classes.message_item}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.text}>{props.message}</p>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
