import { Button } from '../../../components/common/Button';
import signURL from '../../../assets/firstSign.png';

import { Link } from 'react-router-dom';

import './Principal.scss';

function Principal() {
    return(
        <section className="Principal box-border flex flex-row w-full pt-24
        flex-col gap-8
        lg:grid lg:gap-0
        lg:px-20">
            <div className="Principal--Title ">
                <h1 className="Principal--Title--Text text-4xl md:text-6xl " id="Green">aprendamos</h1>
                <h1 className="Principal--Title--Text text-[100px] md:text-[160px]" id="Yellow">señas</h1>
                <h1 className="Principal--Title--Text text-3xl md:text-5xl" id="White">jugando</h1>
                <p className="Principal--Title--Text text-base" id="Secondary">¿Quieres clases personalizadas?</p>
                <Link to="/auth/Register">
                    <Button design="Purple">Regístrate aquí</Button>
                </Link>
            </div>
            <div className="Principal--Visual 
            md:w-full h-[30rem] 
            lg:w-[30rem] 
            lg:w-full 
            box-border">
                <div className="Principal--Visual--Border box-border
                flex justify-center items-center 
                w-56 h-56
                md:w-80 md:h-80
                lg:w-64 lg:h-64 lg:px-20 '
                xl:w-[28rem] xl:h-[28rem] xl:pt-20">
                    <img className="Principal--Visual--Border--Img 
                    w-[18rem] ml-8
                    md:w-[25rem] md:ml-4 
                    lg:w-[20rem] lg:ml-8
                    xl:w-[35rem] xl:mb-20" src={signURL} alt="" />
                </div>
            </div>
        </section>
    )
}

export { Principal }