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

const Index = () => {

    const ymetrica = () => {
        return (
            "<!-- Yandex.Metrika counter -->\n" +
                "<script type=\"text/javascript\" \n>" +
                "(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n" +
                "m[i].l=1*new Date();\n" +
                "for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n" +
                "k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n"+
                "(window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n" +
                "\n"+
                "ym(94370757, \"init\", {\n"+
                "clickmap:true,\n"+
                "trackLinks:true,\n"+
                "accurateTrackBounce:true,\n"+
                " webvisor:true\n"+
                "});\n"+
                "</script>\n"+
                "<noscript><div><img src=\"https://mc.yandex.ru/watch/94370757\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>\n"+
            "<!-- /Yandex.Metrika counter -->"
        )
    }

    return  (
        <div>
            <meta name={'keywords'} content={'перетяжка мебели нур-султан, реставрация мебели нур-султан, кровати нур-султан, перетяжка мебели, ордер кз, ордер кз мебель, изготволение мебели нур-султан, перетяжка обивки диван кресло стул кровать, замена наполнителя диван кресло стул кровать, замена каркаса диван кресло стул кровать, купить кровать нур-султан, купить матрас нур-султан, нур султан мебель, диван кресло кровать матрасы стул нур-султан, купить, перешить диван кресло стул кровать, астана купить кровать стул мебель диван, претяжка мебели астана, реставрация мебели астана, в астане'}/>
            <Head>
                <title>MEBELINK - Мебельное производство Астана</title>
                <link rel="icon" href="/icon.png" />
                <div dangerouslySetInnerHTML={{__html: ymetrica()}}/>
            </Head>

            <Header/>

            <IntroBlock/>
            <AboutUs/>
            <Services/>
            <Materials/>
            <HowToWork/>
            <Questions/>
            <ApplicationBlock/>

            <Footer/>
        </div>
    )
}

export default Index;