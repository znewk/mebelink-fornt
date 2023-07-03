import styles from './styles.module.css'
import Image from "next/image";
const AboutUs = () => {
    return (
        <div className={styles.container}>
            <Image src={'/about_us.png'} height={2000} width={2000} alt={'about us'} className={styles.img}/>

            <div className={styles.textBlock}>
                <div>
                    <h2 className={styles.title}>Доверьте свою мягкую мебель нам, и вы останетесь в восторге от результата.</h2>

                    <p>Мы гордимся нашими навыками и результатами наших работ. Позвольте нам помочь вам преобразовать вашу мебель и сделать ваш дом еще более привлекательным и уютным. Свяжитесь с нами сегодня, чтобы обсудить вашу мебель и начать вместе создавать шедевры!</p>
                </div>

                <div className={styles.list}>
                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <Image height={16} width={16} src={'/checked.png'} alt={'checked'} className={styles.checkImg}/>
                            <span className={styles.itemTitle}>Консультации и дизайнерские решения</span>
                        </div>
                        <span className={styles.itemSubtitle}> Наша команда экспертов с радостью поможет вам выбрать идеальный стиль, ткани и отделку для вашей мебели. Мы предлагаем консультации по дизайну, чтобы помочь вам принять взвешенные решения и создать мебель, отражающую ваш уникальный вкус и стиль.</span>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <Image height={16} width={16} src={'/checked.png'} alt={'checked'} className={styles.checkImg}/>
                            <span className={styles.itemTitle}>Индивидуальные проекты и заказы</span>
                        </div>
                    <span className={styles.itemSubtitle}> Мы специализируемся на индивидуальном подходе к каждому клиенту. Если у вас есть особые требования или идеи, мы рады воплотить их в жизнь. Независимо от того, нужно ли вам изменить размеры мебели, добавить дополнительные функции или создать нестандартный дизайн, мы готовы воплотить ваши мечты в реальность.</span>
                </div>
                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <Image height={16} width={16} src={'/checked.png'} alt={'checked'} className={styles.checkImg}/>
                            <span className={styles.itemTitle}>Обновление и модернизация</span>
                        </div>
                        <span className={styles.itemSubtitle}>Если вам нравится ваша мебель, но она выглядит немного устаревшей, мы можем помочь вам обновить ее без полной перетяжки. Мы предлагаем услуги по реставрации рамы, замене пружин и наполнителей, а также обновлению отделки, чтобы ваша мебель выглядела свежей и современной.</span>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <Image height={16} width={16} src={'/checked.png'} alt={'checked'} className={styles.checkImg}/>
                            <span className={styles.itemTitle}>Профессиональный уход и рекомендации</span>
                        </div>
                        <span className={styles.itemSubtitle}>Мы предлагаем советы по уходу за вашей мебелью, чтобы она служила вам долгие годы. Наша команда с удовольствием поделится советами и рекомендациями по правильному уходу за различными типами тканей и материалов.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;