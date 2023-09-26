import styles from './styles.module.css'
import Link from "next/link";
import Image from "next/image";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import CreateApplicationForm from "../Forms/CreateApplicationForm";
import {useState} from "react";

const Footer = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <footer className={styles.footer}>
            <ModalWindow show={show} handleClose={handleClose} heading={`Сделать заказ`} body={<CreateApplicationForm/>}/>
            <div className={styles.footerTop}>
                <h2 className={styles.topTitle}>MEBELINK</h2>

                <div className={styles.networks}>
                    <Link href={'https://api.whatsapp.com/send?phone=77068171765&text=Здраствуйте,%20пишу%20Вам%20с%20сайта.&source=&data='}>
                        <Image src={'/whatsapp.png'} height={64} width={64} className={styles.icon} alt={'icon'}/>
                    </Link>
                    <Link href={'https://instagram.com/mebelink.ast?igshid=Y2IzZGU1MTFhOQ=='}>
                        <Image src={'/instagram.png'} height={64} width={64} className={styles.icon} alt={'icon'}/>
                    </Link>
                </div>
            </div>

            <div className={styles.hr}></div>

            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Маршрутизация</h3>

                    <Link href={'/'} className={styles.columnItem}>
                        <span>Главная</span>
                    </Link>
                    <span onClick={()=>{setShow(!show)}} className={styles.columnItem}>Сделать заказ</span>
                    <Link href={'/'} className={styles.columnItem}>
                        <span>О нас</span>
                    </Link>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Контакты</h3>

                    <Link href={'tel:+77068171765'} className={styles.columnItem}>
                        <span>+7 (706) 817-17-65</span>
                    </Link>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Почта</h3>

                    <Link href={'mailto:mebelink.kz01@mail.ru'} className={styles.columnItem}>
                        <span>mebelink.kz01@mail.ru</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
