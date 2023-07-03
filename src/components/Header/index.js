import styles from './styles.module.css'
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href={'/'} className={styles.logoLink}>
                    <h2>MEBELINK</h2>
                </Link>

            </div>

            <nav className={styles.menu}>
                <ul className={styles.menuList}>
                    <Link href={'/'} className={styles.menuItem}>
                        <li>Главная</li>
                    </Link>
                    <Link href={'/order'} className={styles.menuItem}>
                        <li>Сделать заказ</li>
                    </Link>
                    <Link href={'/about'} className={styles.menuItem}>
                        <li>О нас</li>
                    </Link>
                </ul>
            </nav>

            <Link href={'https://wa.me/+77068171765'} className={styles.waBlock}>
                <Image src={'/whatsapp_black.png'} width={64} height={64} alt={'whatsapp icon'} className={styles.waIcon}/>
            </Link>
        </div>
    )
}

export default Header;