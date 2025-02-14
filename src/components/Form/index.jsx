import './index.scss';
import { useState } from 'react';

const token = '7812789435:AAGeOxORcwy9-GlTAYpxq13mYfrLLfcZ594';
const chatId = 5206305825;

export const Form = () => {
    const [isSend, setIsSend] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [name, setName] = useState('');

    const onChangeName = ({ target }) => {
        setName(target.value);
    };

    const send = () => {
        if (!name) return;
        setIsSending(true);

        const text = `${name}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {})
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            })
            .finally(() => {
                setIsSend(true);
                setIsSending(false);
                setName('');
            });
    };

    return (
        <div className="form">
            <div className="animate-appear">
                <div className="contacts_title">
                    <div className="contacts_title_line"></div>
                    <span className="">Account</span>
                </div>
            </div>
            {isSend ? (
                <>
                    <div className="contacts_description mont ">Спасибо за информацию</div>
                </>
            ) : (
                <>
                    <div className="contacts_description mont ">Пожалуйста, заполните информацию про вас</div>
                    <div className="form_poster">
                        <input
                            onChange={onChangeName}
                            id="glassInput"
                            className="form_input outfit"
                            type="text"
                            placeholder="Напишите ваше Имя и Фамилию..."
                            disabled={isSending}
                            value={name}
                        />
                        <button className="form_btn" disabled={isSending} onClick={send}>
                            Отправить
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
