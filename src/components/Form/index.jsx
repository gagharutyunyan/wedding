import { useState } from 'react';

const token = '7812789435:AAGeOxORcwy9-GlTAYpxq13mYfrLLfcZ594';
const chatId = '@gag_jess_guest';

import './index.scss';

export const Form = () => {
    const [isSend, setIsSend] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
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

    const onChangeEdit = () => {
        setIsEdit(true);
    };

    const send = () => {
        if (!name) {
            setIsTouched(true);
            return;
        }
        setIsSending(true);

        const text = `<strong>Имя</strong> - ${name}\n<strong>Семья</strong> - ${details || 'Не заполнено'}\n<strong>Аллергии</strong> - ${allergic || 'Не заполнено'}\n<strong>Придет?</strong> - ${noCome ? 'Нет' : 'Да'}${isEdit ? '\n\n <strong>Отредактировано!</strong>' : ''}`;
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
                setIsEdit(false);
                setIsSend(true);
                setIsSending(false);
            });
    };

    return (
        <div className="form">
            <div className="animate-appear">
                <div className="contacts_title form_title">
                    <span className="outfit">Просим вас дать ответ до 20 марта</span>
                </div>
                <div className="contacts_title">
                    <span className="great">Questions</span>
                </div>
            </div>
            {isSend && !isEdit ? (
                <>
                    <div className="form_description mont ">Спасибо за информацию</div>
                    <div className="form_description mont ">
                        <button className="form_btn" disabled={isSending} onClick={onChangeEdit}>
                            Редактировать
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="form_description mont animate-appear">
                        Пожалуйста, выделите минуту Вашего времени
                    </div>
                    <div className="form_poster animate-appear">
                        <div className={`form_poster_name ${isTouched && !name && 'form_error'}`}>
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
                            С кем Вы планируете присутствовать?(Имя Фамилия)
                        </label>
                        <textarea
                            onChange={onChangeDetails}
                            id="details"
                            className="form_input outfit"
                            placeholder="Пример: Гагик Арутюнян, Jessica Harutyunyan, և այլն..."
                            disabled={isSending}
                            rows={3}
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
                                checked={noCome}
                                disabled={isSending}
                            />{' '}
                            К сожалению я НЕ приду
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
