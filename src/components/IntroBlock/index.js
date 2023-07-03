import styles from './styles.module.css'
import React, {useEffect, useState} from 'react';
import {useSpring, animated} from "react-spring";
import Image from "next/image";
import classnames from 'classnames'
const IntroBlock = () => {

    const [years, setYears] = useState(3)
    const [filials, setFilials] = useState(2)
    const [sofa, setSofa] = useState(500)
    const [clients, setClients] = useState(150)

    const Number = ({n}) => {
        const {number} = useSpring({
            from: {number: 0},
            number: n,
            delay: 200,
            config: {mass: 1, tension: 20, friction: 10}
        })

        return <animated.div style={{display: 'inline'}}>{number.to((n)=>n.toFixed(0))}</animated.div>
    }

    return (
        <div className={styles.container}>
            <Image src={'/logo2.png'} alt={'logo'} height={256} width={256} className={styles.logo}/>
            <h1 className={styles.title}>
                Вернем душу и комфорт вашей мебели
            </h1>

            <p className={styles.subtitle}>
                {/*Мы — команда опытных мастеров, специализирующихся на приведении мебели в идеальное состояние и создании неповторимых обновленных образов. Наше мастерство и страсть к деталям позволяют нам превратить старые и изношенные предметы в настоящие произведения искусства, которые будут радовать вас и вашу семью на протяжении многих лет.*/}
                Мы — специализированное реставрационное ателье-мастерская по ремонту и обивке мягкой мебели в Астане
            </p>

            <button className={styles.btn}>УСЛУГИ</button>

            <div className={styles.static}>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>
                        <Number n={3}/>
                    </h2>
                    <p className={styles.cardSubtitle}>
                        Года на рынке
                    </p>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>
                        <Number n={2}/>
                    </h2>
                    <p className={styles.cardSubtitle}>
                        Действующих филиалa <br/> по Казахстану
                    </p>
                </div>
                <div className={classnames(styles.hr, styles.mobileHr)}></div>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>
                        <Number n={500}/>+
                    </h2>
                    <p className={styles.cardSubtitle}>
                        Едениц мебели <br/> изготовлено
                    </p>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>
                        <Number n={150}/>+
                    </h2>
                    <p className={styles.cardSubtitle}>
                        Довольных клиентов
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IntroBlock;