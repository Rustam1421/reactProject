import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({updateNewMessageBody,sendMessage, dialogsPage }) => {

    let state = dialogsPage;

    let dialogElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src} />
    );

    let messageElements = state.messages.map(message => <Message message={message.message} id={message.id} />
    );

    let newMessageBody = state.newMessageText;

    let onChangeMessage = (e) => {
        let body = e.target.value;
        updateNewMessageBody(body)
    }

    let onSendMessage = () => {
        sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>

                <div>
                    <textarea value={newMessageBody} onChange={onChangeMessage}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessage}>send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;