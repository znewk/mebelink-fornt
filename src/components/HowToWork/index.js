import styles from './styles.module.css'
import {useState} from "react";
import Image from "next/image";

const HowToWork = () => {
    const [process, setProcess] = useState([
        {
            id: 21321,
            title: 'Выбор услуги и отправка заявки',
            img: '/choice.png'
        },
        {
            id: 213218,
            title: 'Вызов\n' +
                'дизайнера-замерщика',
            img: '/tape-measure.png'
        },
        {
            id: 21321444,
            title: 'Заключение\n' +
                'договора',
            img: '/contract.png'
        },
        {
            id: 21321213,
            title: 'Забор мебели\n' +
                'на фабрику',
            img: '/fast-delivery.png'
        },
        {
            id: 213214233241,
            title: 'Проведение работ',
            img: '/support.png'
        },
        {
            id: 213221123111,
            title: 'ОТК проверка\n' +
                'качества',
            img: '/checklist.png'
        },
        {
            id: 21321112321321313,
            title: 'Упаковка мебели\n',
            img: '/box.png'
        },
        {
            id: 21321876876,
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
                {process.map((item, idx)=>{
                    return (
                        <>
                            <div className={styles.card} key={idx}>
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