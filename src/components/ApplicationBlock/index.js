import styles from "./styles.module.css"
import classnames from 'classnames'
import Link from "next/link";

const ApplicationBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.titleBlock}>
                    <h2 className={styles.title}>Возникли вопросы?</h2>
                    <p className={styles.subtitle}>Что-то непонятно или недостаточно информации? <br/>
                        Оставьте заявку на бесплатную консультацию и наши менеджера свяжутся с Вами и все предельно объяснят!</p>
                </div>

                <div className={styles.inputs}>
                    <input type="text" className={styles.input} placeholder={'Контактное лицо'}/>
                    <input type="text" className={styles.input} placeholder={'Номер телефона'}/>
                    <textarea className={classnames(styles.input, styles.textarea)} placeholder={'Краткое сообщение'}></textarea>
                    <button className={styles.btn}>Жду звонка</button>
                </div>

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