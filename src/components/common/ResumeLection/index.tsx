import { Button } from '../Button';

import './ResumeLection.scss';

import { Link } from 'react-router-dom';

function ResumeLection(props: any) {
    return(
        <Link className='no-underline' to={`Lection/${props.url}/Menu`}>
            <article className="ResumeLection flex gap-4 w-full box-border">
                <img className="ResumeLection--Img h-24 " src={props.image} alt="sena" />
                <div className='flex flex-col gap-0 justify-center'>
                    <p className="ResumeLection--Text font-bold text-base text-slate-400">LECCIÓN {props.url}</p>
                    <h4 className="ResumeLection--Title text-2xl text-black">{props.title}</h4>
                    <p className="ResumeLection--Oblig text-base text-black">Curso {props.type}</p>
                </div>
            </article>
        </Link>
    )
}

export { ResumeLection }