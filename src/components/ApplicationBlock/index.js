import styles from "./styles.module.css"
import classnames from 'classnames'
import Link from "next/link";
import API from "../../api";
import {useEffect, useRef, useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input/input'
import kz from 'react-phone-number-input/locale/ru.json'

const ApplicationBlock = () => {
    const api = new API()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('+7')
    const [message, setMessage] = useState('')
    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)
    const [appSend, setAppSend] = useState(false)
    const sendApplication = async () => {
        if(phone.length<12 || phone.length > 12) {
            setState('Неккоретный номер телефона')
        }
        else if(name.length<3){
            setState('Неккоретная длина ФИО')
        } else {
            await api.createNewApplicationToConsultation(name, phone, message)
            setAppSend(true)

            setState('Заявка успешно отправлена! Ожидайте звонка.')
        }
        setLoading(false)
    }



    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.titleBlock}>
                    <h2 className={styles.title}>Возникли вопросы?</h2>
                    <p className={styles.subtitle}>Что-то непонятно или недостаточно информации? <br/>
                        Оставьте заявку на бесплатную консультацию и наши менеджера свяжутся с Вами и все предельно объяснят!</p>
                </div>

                <div className={styles.inputs}>
                    <input type="text" className={styles.input} placeholder={'Контактное лицо'} onChange={event => setName(event.target.value)}/>


                    <PhoneInput
                        placeholder="Номер телефона"
                        countryCallingCodeEditable={false}
                        defaultCountry="KZ"
                        labels={kz}
                        value={phone}
                        className={styles.input}
                        onChange={setPhone}/>
                    <textarea className={classnames(styles.input, styles.textarea)} placeholder={'Краткое сообщение'} onChange={event => setMessage(event.target.value)}></textarea>
                    <button className={styles.btn}
                            onClick={()=> {
                                setLoading(true)
                                setState('Загрузка...')
                                sendApplication()
                            }}
                    >Жду звонка</button>
                </div>

                <span className={classnames(styles.error)} style={{color: state === 'Заявка успешно отправлена! Ожидайте звонка.' || 'Загрузка...' ? 'white' : 'orangered'}}>{state}</span>

                <div className={styles.footer}>
                    <p className={styles.footerTitle}>Или свяжитесь с нами напрямую</p>
                    <div className={styles.footerWrapper}>
                        <Link href={'https://wa.me/+77068171765 '} className={styles.link}>
                            <span>Перейти в WhatsApp</span>
                        </Link>

                        <Link href={'tel:+77068171765'} className={styles.link}>
                            <span>+7 (706) 817-17-65</span>
                        </Link>

                        <Link href={'mailto:mebelink.kz01@mail.ru'} className={styles.link}>
                            <span>mebelink.kz01@mail.ru</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationBlock;