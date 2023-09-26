import styles from './styles.module.css'
import {useState} from "react";
import Image from "next/image";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import CreateApplicationToProduct from "../Forms/CreateApplicationToProduct";

const Services = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [furniture, setFurniture] = useState([
        {
            id: 213210,
            toRest: true,
            title: 'Стулья',
            old_price: '₸ 10.000',
            price: '₸ 8.000',
            img: '/services3.jpg',
            bg_size: 'cover'
        },
        {
            id: 213219,
            toRest: true,
            title: 'Диваны',
            old_price: '₸ 75.000',
            price: '₸ 50.000',
            img: '/services2.jpg',
            bg_size: 'cover'
        },
        {
            id: 21321223,
            toRest: true,
            title: 'Кресла',
            old_price: '₸ 45.000',
            price: '₸ 30.000',
            img: '/services1.jpg',
            bg_size: 'cover'
        },
        {
            id: 213215,
            toRest: true,
            title: 'Диван двойка',
            old_price: '₸ 75.000',
            price: '₸ 50.000',
            img: '/services4.jpg',
            bg_size: 'cover'
        },
        {
            id: 212321,
            toRest: true,
            title: 'Подлокотники',
            old_price: '₸ 15.000',
            price: '₸ 10.000',
            img: '/services5.jpg',
            bg_size: 'cover'
        },
        {
            id: 21321,
            toRest: true,
            title: 'Угловые диваны',
            old_price: '₸ 100.000',
            price: '₸ 80.000',
            img: '/services6.jpg',
            bg_size: 'cover'
        },
    ])

    const [productToOrder, setProductToOrder] = useState({})

    return (
        <div className={styles.container}>
            <ModalWindow show={show} handleClose={handleClose} heading={`Сделать заказ`} body={<CreateApplicationToProduct product={productToOrder}/>}/>
            <div className={styles.titleBlock} id={'services'}>
                <h2 className={styles.title}>Перетяжка мебели</h2>
                <p>
                    Качественная работа по реставрации мебели. <br/>
                    Указана ориентировачная цена, для точной оценки свяжитесь с нами.
                </p>
            </div>
            <div className={styles.wrapper}>
                {
                    furniture.map((item, idx)=>{

                        return (
                            <div className={styles.card} key={item.id} onClick={()=> {
                                setProductToOrder(item)
                                setShow(!show)
                            }}>
                                    <div className={styles.cardImageBody}>
                                        <Image src={item.img} alt={'icon'} height={1024} width={1024} className={styles.cardImage}/>
                                        <button className={styles.btn}>
                                            <Image src={'/plus.png'} height={64} width={64} alt={'plus'} className={styles.btnImg}/>
                                        </button>
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