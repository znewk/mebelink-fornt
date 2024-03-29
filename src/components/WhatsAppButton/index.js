import styles from './style.module.css'
import {Image} from "react-bootstrap";

const WhatsAppButton = () => {
    return (
        <a className={styles.container} target={'_blank'} href={'https://api.whatsapp.com/send?phone=77068171765&text=Здраствуйте,%20пишу%20Вам%20с%20сайта.&source=&data='}>
            <Image src={'/whatsapp_green.png'}/>
        </a>
    )
}

export default WhatsAppButton;