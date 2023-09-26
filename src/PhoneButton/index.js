import styles from  "./styles.module.css"
import {Image} from "react-bootstrap";

const PhoneButton = () => {

    return (
        <a className={styles.container} target={'_blank'} href={'tel:+77068171765'}> 
            <Image height={32} width={32} src={'/phone-call.png'}/>
        </a>
    )
}

export default PhoneButton;