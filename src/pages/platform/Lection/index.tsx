// import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import './Lection.scss'

const activity = {
    name: "Aprendizaje",
    description: "Aprendamos las vocales juntos",
    flag_completed: false,
    num_by_lesson: 1
}
const letters =[
    {
        name: "A",
        description: "Vocal A",
        kind: "image",
        url: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE01/AC01/a.png"
    },
    {
        name: "E",
        description: "Vocal E",
        kind: "image",
        url: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE01/AC01/e.png"
    },
    {
        name: "I",
        description: "Vocal I",
        kind: "image",
        url: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE01/AC01/i.png"
    },
    {
        name: "O",
        description: "Vocal O",
        kind: "image",
        url: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE01/AC01/o.png"
    },
    {
        name: "U",
        description: "Vocal U",
        kind: "image",
        url: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE01/AC01/u.png"
    }
]

export const Lection = () => {
    const { lectionId } = useParams();

    return (
        <section className="Lection bg-white p-12 box-border w-full flex flex-col gap-8"> 
            <article className="ResumeLection flex gap-4 w-full box-border">
                <img className="ResumeLection--Img h-24 " src="http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png" alt="sena" />
                <div className='flex flex-col gap-0 justify-center'>
                    <p className="ResumeLection--Text font-bold text-base text-slate-400">ACTIVIDAD {activity.num_by_lesson}</p>
                    <h4 className="ResumeLection--Title text-2xl text-black">Título: {activity.name}</h4>
                    <h4 className="ResumeLection--Title text-xl text-black">{activity.description}</h4>
                    <p className="ResumeLection--Oblig text-base text-black">Creada por <strong>Enseniando</strong></p>
                </div>
            </article>
        </section>
    )
}