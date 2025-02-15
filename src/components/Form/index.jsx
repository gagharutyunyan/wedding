import { useState } from 'react';

const token = '7812789435:AAGeOxORcwy9-GlTAYpxq13mYfrLLfcZ594';
const chatId = '@gag_jess_guest';

import './index.scss';

export const Form = () => {
    const [isSend, setIsSend] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [allergic, setAllergic] = useState('');
    const [noCome, setNoCome] = useState(false);

    const onChangeName = ({ target }) => {
        setName(target.value);
    };

    const onChangeDetails = ({ target }) => {
        setDetails(target.value);
    };

    const onChangeAllergic = ({ target }) => {
        setAllergic(target.value);
    };

    const onChangeNoCome = ({ target }) => {
        setNoCome(target.checked);
    };

    const send = () => {
        if (!name) {
            setIsTouched(true);
            return;
        }
        setIsSending(true);

        const text = `<strong>Имя</strong> - ${name}\n<strong>Семья</strong> - ${details || 'Не заполнено'}\n<strong>Аллергии</strong> - ${allergic || 'Не заполнено'}\n<strong>Придет?</strong> - ${noCome ? 'Нет' : 'Дв'}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                parse_mode: 'html',
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
            });
    };

    return (
        <div className="form">
            <div className="animate-appear">
                <div className="contacts_title">
                    <div className="contacts_title_line"></div>
                    <span className="great">Questions</span>
                </div>
            </div>
            {isSend ? (
                <>
                    <div className="form_description mont ">Спасибо за информацию</div>
                </>
            ) : (
                <>
                    <div className="form_description mont ">Пожалуйста, выделите минуту Вашего времени</div>
                    <div className="form_poster">
                        <div className={isTouched && !name && 'form_error'}>
                            <label htmlFor="name" className="form_label mont">
                                Ваше имя и фамилия <span>*</span>
                            </label>
                            <input
                                onChange={onChangeName}
                                id="name"
                                className="form_input form_input_name outfit"
                                type="text"
                                placeholder="Гагик Арутюнян"
                                disabled={isSending}
                                value={name}
                            />
                        </div>
                        <label htmlFor="details" className="form_label form_label_details mont">
                            С кем Вы планируете присутствовать?
                        </label>
                        <input
                            onChange={onChangeDetails}
                            id="details"
                            className="form_input outfit"
                            type="text"
                            placeholder="Гагик, Jessica, և այլն..."
                            disabled={isSending}
                            value={details}
                        />
                        <label htmlFor="allergic" className="form_label form_label_details mont">
                            Есть ли у Вас аллергические реакции или ограничения по питанию?
                        </label>
                        <input
                            onChange={onChangeAllergic}
                            id="allergic"
                            className="form_input outfit"
                            type="text"
                            placeholder="Нет..."
                            disabled={isSending}
                            value={allergic}
                        />
                        <label
                            htmlFor="no_come"
                            className="form_label form_label_details form_label_checkbox mont"
                        >
                            <input
                                onChange={onChangeNoCome}
                                id="no_come"
                                className="form_input outfit"
                                type="checkbox"
                                disabled={isSending}
                            />{' '}
                            К сожалению НЕ приду
                        </label>
                        <button className="form_btn" disabled={isSending} onClick={send}>
                            Отправить
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
