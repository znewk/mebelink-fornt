import styles from './styles.module.css'
import {useState} from "react";
import Image from "next/image";

const Services = () => {

    const [furniture, setFurniture] = useState([
        {
            title: 'Стулья',
            old_price: '₸ 10.000',
            price: '₸ 8.000',
            img: '/services3.jpg',
            bg_size: 'cover'
        },
        {
            title: 'Диваны',
            old_price: '₸ 75.000',
            price: '₸ 50.000',
            img: '/services2.jpg',
            bg_size: 'cover'
        },
        {
            title: 'Кресла',
            old_price: '₸ 45.000',
            price: '₸ 30.000',
            img: '/services1.jpg',
            bg_size: 'cover'
        },
        {
            title: 'Диван двойка',
            old_price: '₸ 75.000',
            price: '₸ 50.000',
            img: '/services4.jpg',
            bg_size: 'cover'
        },
        {
            title: 'Подлокотники',
            old_price: '₸ 15.000',
            price: '₸ 10.000',
            img: '/services5.jpg',
            bg_size: 'cover'
        },
        {
            title: 'Угловые диваны',
            old_price: '₸ 100.000',
            price: '₸ 80.000',
            img: '/services6.jpg',
            bg_size: 'cover'
        },
    ])

    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Перетяжка мебели</h2>
                <p>
                    Качественная работа по реставрации мебели. <br/>
                    Указана ориентировачная цена, для точной оценки свяжитесь с нами.
                </p>
            </div>
            <div className={styles.wrapper}>
                {
                    furniture.map((item)=>{
                        return (
                            <div className={styles.card}>
                                    <div className={styles.cardImageBody}>
                                        <Image src={item.img} alt={'icon'} height={1024} width={1024} className={styles.cardImage}/>
                                        <button className={styles.btn}>+</button>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <div className={styles.priceBlock}>
                                            <span className={styles.price}>{item.price}</span>
                                            <span className={styles.oldPrice}>{item.old_price}</span>
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services;