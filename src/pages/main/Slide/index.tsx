import './Slide.css';
import { PrCard } from "../../../components/common/PrCard"

const todosTotal = [
    {
        title: "Vocales",
        text: "Vocales del abecedario",
        image: "http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png",
        progress: 0,
        url: '1'
    },
    {
        title: "Consonantes 1",
        text: "Parte 1 de consonantes del abecedario",
        image: "http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png",
        progress:0,
        url: '2'
    },
    {
        title: "Consonantes 2",
        text: "Parte 2 de consonantes del abecedario",
        image: "http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png",
        progress: 0,
        url: '3'
    }
];

function Slide() {
    return(
        <>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#d5c3db" fillOpacity="1" d="M0,160L120,144C240,128,480,96,720,96C960,96,1200,128,1320,144L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>
            <section className="Slide flex flex-col gap-8 pt-36 pb-20 justify-between items-center px-8">
                <h1 className="Slide--Title text-4xl text-center">Lecciones interactivas</h1>
                <div className="flex gap-12 content-stretch box-border
                 px-4 md:px-8 flex-wrap justify-center">
                    {todosTotal.map(todo => (
                    <PrCard key={todo.url} url={todo.url} title={todo.title} text={todo.text} />
                    ))}
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="#78ae3e" fillOpacity="1" d="M0,128L60,133.3C120,139,240,149,360,149.3C480,149,600,139,720,138.7C840,139,960,149,1080,149.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </>
    )
}

export { Slide }