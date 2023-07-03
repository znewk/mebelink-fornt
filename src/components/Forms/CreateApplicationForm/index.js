import styles from './style.module.css'
import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input/input'
import kz from 'react-phone-number-input/locale/ru.json'

import API from "../../../api";
import {Image} from "react-bootstrap";

const CreateApplicationForm = ({...props}) => {
    const api = new API()


    const sendApplication = async () => {

        if(phone.length<12 || phone.length > 12) {
            setState('Неккоретный номер телефона')
        }
        else if(name.length<3){
            setState('Неккоретная длина ФИО')
        } else {
            await api.createApplication(name, phone, type, typeOfRestFurniture, '', message)
            setAppSend(true)
            setState('Заявка успешно отправлена! Ожидайте звонка.')
        }
        setLoading(false)
    }

    const [type, setType] = useState('rest')

    const [typeOfRestFurniture, setTypeOfRestFurniture] = useState('Стулья')


    const [name, setName] = useState('')
    const [phone, setPhone] = useState('+7')
    const [message, setMessage] = useState('')

    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)
    const [appSend, setAppSend] = useState(false)

    return (
        <div>
            <span className={styles.title}>
                {/*ORDER - Мы имеем большой опыт работы в данной сфере и можем гарантировать фабричное качество.*/}
                {/*Большой выбор обивочных материалов на любой вкус и цвет. <br/> <br/>*/}
                Оставьте заявку на услугу или получите консультацию бесплатно. <br/>Наши менеджеры свяжуться с вами после обработки заявки.
            </span>
            <br/>
            {
                loading ? (
                    <div className={styles.loadingBlock}>
                        <Image src={'/spinner.png'} className={styles.spinner}/>
                    </div>
                ) : (
                    appSend ? (
                        <div className={styles.loadingBlock}>
                            <span className={styles.title} style={{color: state === 'Заявка успешно отправлена! Ожидайте звонка.' ? 'black' : 'orangered'}}>{state}</span>
                        </div>
                    ) : (
                        <div className={styles.form}>
                            <>
                                <span className={styles.title}>Выберите вид мебели:</span>
                                <select className={styles.select} value={typeOfRestFurniture} onChange={event => setTypeOfRestFurniture(event.target.value)}>
                                    <option value="Стулья">Стулья</option>
                                    <option value="Диваны">Диваны</option>
                                    <option value="Кресла">Кресла</option>
                                    <option value="Диван двойка">Диван двойка</option>
                                    <option value="Угловые диваны">Угловые диваны</option>
                                    <option value="Подлокотники">Подлокотники</option>
                                </select>
                            </>
                            <div className={styles.inputs}>
                                <input type="text" className={styles.input} placeholder={"ФИО"} onChange={event => setName(event.target.value)}/>
                                <PhoneInput
                                    placeholder="Номер телефона"
                                    countryCallingCodeEditable={false}
                                    defaultCountry="KZ"
                                    labels={kz}
                                    value={phone}
                                    className={styles.input}
                                    onChange={setPhone}/>

                                <textarea className={styles.textArea} placeholder={'Оставьте сообщение'} value={message} onChange={event => setMessage(event.target.value)}>
                                </textarea>
                            </div>




                            <div className={styles.btnBody}>
                                <button className={styles.btn} disabled={appSend} onClick={()=> {
                                    setLoading(true)
                                    sendApplication()
                                }}>Оставить заявку</button>
                            </div>

                            <span className={styles.title} style={{color: state === 'Заявка успешно отправлена! Ожидайте звонка.' ? 'black' : 'orangered'}}>{state}</span>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default CreateApplicationForm;