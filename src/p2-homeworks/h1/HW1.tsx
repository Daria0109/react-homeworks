import React from "react";
import Message from './Message';
import classes from './Message.module.css'



function HW1() {

    const messageData = {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Artem",
        message: "npm start нажимал?",
        time: "22:00",
    };

       return (
        <div className={classes.hw_1}>
            {/*<hr/>*/}
            <p className={classes.homework_1}>homeworks 1</p>
            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
