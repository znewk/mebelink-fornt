import Head from "next/head";
import styles from "./main.module.css"
import Header from "../src/components/Header";
import IntroBlock from "../src/components/IntroBlock";
import AboutUs from "../src/components/AboutUs";
import Services from "../src/components/Services";
import Materials from "../src/components/Materials";
import HowToWork from "../src/components/HowToWork";
import Questions from "../src/components/Questions";
import ApplicationBlock from "../src/components/ApplicationBlock";
import Footer from "../src/components/Footer";
import DontWork from "../src/components/DontWork";
import WhatsAppButton from "../src/components/WhatsAppButton";
import { useEffect } from "react";
import YandexMetrika from "../src/components/YandexMetrika";

const Index = () => {


    return  (
        <div>

            <meta name={'keywords'} content={'перетяжка мебели нур-султан, реставрация мебели нур-султан, кровати нур-султан, перетяжка мебели, ордер кз, ордер кз мебель, изготволение мебели нур-султан, перетяжка обивки диван кресло стул кровать, замена наполнителя диван кресло стул кровать, замена каркаса диван кресло стул кровать, купить кровать нур-султан, купить матрас нур-султан, нур султан мебель, диван кресло кровать матрасы стул нур-султан, купить, перешить диван кресло стул кровать, астана купить кровать стул мебель диван, претяжка мебели астана, реставрация мебели астана, в астане'}/>
            <Head>
                <title>MEBELINK - Мебельное производство Астана</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <Header/>

            <IntroBlock/>
            <AboutUs/>
            <Services/>
            <Materials/>
            <HowToWork/>
            <Questions/>
            <ApplicationBlock/>
            <WhatsAppButton/>

            <Footer/>

            <YandexMetrika/>
        </div>
    )
}

export default Index;