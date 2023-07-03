import styles from './styles.module.css'
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

const Materials = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    const [images, setImages] = useState([
        {
            title: 'Кожзам',
            img: '/materials1.jpg',
        },
        {
            title: 'Велюр',
            img: '/materials2.jpg',
        },
        {
            title: 'Замша',
            img: '/materials3.jpg',
        },
        {
            title: 'Жаккард',
            img: '/materials4.jpg',
        },
        {
            title: 'Флок',
            img: '/materials5.jpg',
        },
    ])

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth > 1024 ? carousel.current.scrollWidth - carousel.current.offsetWidth : 950 )
        console.log('widht ',carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <motion.h2 className={styles.title}>Материалы с которыми мы работаем</motion.h2>
                <p>Мы используем только материалы высочайшего качества, подобранные с особым вниманием к деталям, чтобы обеспечить вашей мебели прочность, эстетическую привлекательность и долговечность. Мы работаем с надежными поставщиками, чтобы гарантировать, что каждая деталь, каждая ткань и каждый элемент, используемые нами, соответствуют самым высоким стандартам качества.</p>
            </div>
            <motion.div className={styles.carousel} ref={carousel} whileTap={{cursor: 'grabbing'}}>
                <motion.div drag={'x'} dragConstraints={{right: 0, left: -width}} className={styles.innerCarousel}>
                    {images.map((item)=>{
                        return (
                            <motion.div className={styles.item} style={{backgroundImage: `url("${item.img}")`}}>
                                <h3>{item.title}</h3>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Materials;