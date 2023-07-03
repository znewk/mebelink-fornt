import styles from './main.module.css'
import Header from "../src/components/Header";
import Head from "next/head";
const Error = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>MEBELINK - 404 Страница не найдена</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header/>
            <h1 className={styles.errorTitle}>404 | Страница не найдена</h1>
        </div>
    )
}

export default Error;