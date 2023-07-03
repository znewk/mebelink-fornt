import styles from './styles.module.css'
import {useState} from "react";
import Image from "next/image";

const HowToWork = () => {
    const [process, setProcess] = useState([
        {
            title: 'Выбор услуги и отправка заявки',
            img: '/choice.png'
        },
        {
            title: 'Вызов\n' +
                'дизайнера-замерщика',
            img: '/tape-measure.png'
        },
        {
            title: 'Заключение\n' +
                'договора',
            img: '/contract.png'
        },
        {
            title: 'Забор мебели\n' +
                'на фабрику',
            img: '/fast-delivery.png'
        },
        {
            title: 'Проведение работ',
            img: '/support.png'
        },
        {
            title: 'ОТК проверка\n' +
                'качества',
            img: '/checklist.png'
        },
        {
            title: 'Упаковка мебели\n',
            img: '/box.png'
        },
        {
            title: 'Доставка обновленной\n' +
                'мебели к вам',
            img: '/fast-delivery.png'
        },

    ])
    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Основные этапы работ</h2>
                <p>
                    Как сделать заказ и как будет идти работа.
                </p>
            </div>

            <div className={styles.wrapper}>
                {process.map((item)=>{
                    return (
                        <>
                            <div className={styles.card}>
                                <Image src={item.img} alt={'icon'} height={64} width={64} className={styles.icon}/>
                                <p className={styles.cardTitle}>{item.title}</p>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    )
}

export default HowToWork;