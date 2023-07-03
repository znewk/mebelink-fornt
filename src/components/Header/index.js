import styles from './styles.module.css'
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import classnames from "classnames"
import {useState} from "react";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import CreateApplicationForm from "../Forms/CreateApplicationForm";

const Header = () => {
    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className={styles.header}>
            <ModalWindow show={show} handleClose={handleClose} heading={`Сделать заказ`} body={<CreateApplicationForm/>}/>
            <div className={styles.logo}>
                <Link href={'/'} className={styles.logoLink}>
                    <h2>MEBELINK</h2>
                </Link>

                <Image src={'/menu-button-of-three-horizontal-lines.png'} alt={'menu'} height={64} width={64} className={styles.menuIcon}
                    onClick={()=>{setOpen(!open); console.log('ok')}}
                />
            </div>

            <nav className={styles.menu}>
                <ul className={styles.menuList}>
                    <Link href={'/'} className={styles.menuItem}>
                        <li>Главная</li>
                    </Link>
                    <li onClick={()=>{setShow(!show)}} className={styles.menuItem}>Сделать заказ</li>
                    <Link href={'/'} className={styles.menuItem}>
                        <li>О нас</li>
                    </Link>
                </ul>
            </nav>

            <motion.nav className={classnames(styles.mobileMenu)}
                layout style={{height: open ? 150 : 0}}
            >
                <ul className={styles.menuList}>
                    <Link href={'/'} className={styles.menuItem}>
                        <li>Главная</li>
                    </Link>
                    <li onClick={()=>{setShow(!show)}} className={styles.menuItem}>Сделать заказ</li>
                    <Link href={'/'} className={styles.menuItem}>
                        <li>О нас</li>
                    </Link>
                    <Link href={'https://wa.me/+77068171765'} className={classnames(styles.menuItem, styles.block)}>
                        <li>WhatsApp</li>
                    </Link>
                </ul>
            </motion.nav>

            <Link href={'https://wa.me/+77068171765'} className={styles.waBlock}>
                <Image src={'/whatsapp_black.png'} width={64} height={64} alt={'whatsapp icon'} className={styles.waIcon}/>
            </Link>
        </div>
    )
}

export default Header;