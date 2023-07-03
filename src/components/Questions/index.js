import styles from './styles.module.css'
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Image from "next/image";

const Questions = () => {
    const [state, setState] = useState('pc')
    const [questions, setQuestions] = useState([
        {
            question: 'Перетянуть или выбросить мебель?',
            answer: 'Как решить перетягивать мебель или выбросить и приобрести новую?\n' +
                '\n' +
                'Мебель, которую лучше перетянуть:\n' +
                '\n' +
                'мебель из массива ценных пород дерева;\n' +
                'мебель иностранного производства с основой из бруса дерева, латекса;\n' +
                'советскую мебель с основой из бруса дерева, латекса или качественного поролона;\n' +
                'а также любая мебель, к которой вы привязались!\n' +
                'Что же выбросить?\n' +
                '\n' +
                'дешевые модели мебели с основой из ДСП, прессованной бумаги, поролона низкого качества, как правило они начинают сыпаться через 1-2 года;\n' +
                'мебель, с которой связаны плохие воспоминания.',
            height: 350
        },
        {
            question: 'Какие виды работ вы предлагаете?',
            answer: 'Наша компания занимается любыми видами работ, связанных с мягкой мебелью:\n' +
                '﻿﻿Перетяжка мягкой мебели\n' +
                '﻿﻿Замена наполнителя\n' +
                '﻿﻿Покраска деревянных поверхностей\n' +
                '﻿﻿Замена механизмов\n' +
                '﻿﻿Склейка сломанных элементов',
            height: 175
        },
        {
            question: 'У меня износился один мебельный элемент, а все остальное как новое. Что делать?',
            answer: 'Довольно распространенная проблема: изнашивается только одна деталь (например, сидение, подлокотники или спинка).\n' +
                'Конечно, в этом случае нет необходимости перетягивать все изделие. Привезите изношенный элемент к нам, а мы подберем подходящий цвет и материал для перетяжки.',
            height: 195
        },
        {
            question: 'Если не хочется ехать в наш цех?',
            answer: 'Не тратьте свое время! Наш замерщик приедет к вам домой с образцами материалов. Если вы будете готовы, то заключить договор и оформить заказ можно сразу на месте.',
            height: 150
        },
        {
            question: 'Как сделать предварительный расчет?',
            answer: 'Пришлите фотографию изделия через форму обратной связи (она размещается снизу страниц). Мы оценим предполагаемый объем работ и отправим Вам итоговую стоимость.\n' +
                'Для более точной оценки убедитесь, что на фото видны все дефекты мебели!',
            height: 175
        },
    ])
    useEffect(()=>{
        console.log(window.innerWidth)
        if (Number(window.innerWidth) < 768){
            setState('mobile')
        } else if (Number(window.innerWidth) > 768 && Number(window.innerWidth) < 1024){
            setState('mobile')
        } else if (Number(window.innerWidth) >= 1024){
            setState('mobile')
        }
        console.log(state)
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.questions}>
                {questions.map((item)=>{
                    const [isOpen, setOpen] = useState(false)
                    return (
                        <>
                            <motion.div className={styles.question}
                                 onClick={() => setOpen(!isOpen)}
                            >
                                <div className={styles.questionBlock}>
                                    <h3 className={styles.questionText}>{item.question}</h3>
                                    <motion.img
                                        layout
                                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                                        src={'/down-arrow.png'} alt={'arrow'} height={64} width={64} className={styles.arrow}/>
                                </div>
                                <motion.div layout
                                            className={styles.answer}
                                            style={{ height: isOpen ? item.height : 0 }}
                                >
                                    <p>{item.answer}</p>
                                </motion.div>
                                <div className={styles.hr}></div>
                            </motion.div>
                        </>
                    )
                })}
            </div>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Ответы на интересующие Вас вопросы</h2>
                <p>
                    Глубокое понимание нашей работы и услуг: ответы на самые часто задаваемые вопросы от наших клиентов, предоставленные нашей опытной командой экспертов, чтобы вы получили полную информацию о наших процессах, материалах, сроках выполнения и дополнительных возможностях.</p>
            </div>
        </div>
    )
}

export default Questions;