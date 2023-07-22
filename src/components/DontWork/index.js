import styles from './styles.module.css'
import Image from "next/image";

const DontWork = () => {
    return(
        <div className={styles.container}>
            <div className={styles.flex}>
                <Image src={'/eyes-1438.png'} height={1024} width={1024} alt={'eyes'} className={styles.eyes}/>
                <h1 className={styles.title}>Упс! <br/> Ваш сайт временно не поддерживается технически! <br/> Обратитесь к разработчику.</h1>
            </div>

        </div>
    )
}

export default DontWork;