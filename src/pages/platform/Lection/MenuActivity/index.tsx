import { Link, useParams } from 'react-router-dom';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinearProgress from '@mui/material/LinearProgress';

import './MenuActivity.scss'

const activity = {
    name: "Menu",
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

const Activities = [
    {
        title: 'Imágenes con señas',
        text: 'Aprenda las señas con imágenes',
        status: true,
        routing: 'AC1'
    },{
        title: 'Videos',
        text: 'Aprenda las señas con videos',
        status: false,
        routing: 'AC2'
    },{
        title: 'Memoria',
        text: 'Aprenda las señas con memoria',
        status: false,
        routing: 'AC3'
    },{
        title: 'Enlaza la seña',
        text: 'Aprenda las señas con enlaza la seña',
        status: false,
        routing: 'AC4'
    },{
        title: 'Conecta',
        text: 'Aprenda las señas con Conecta',
        status: false,
        routing: 'AC5'
    },{
        title: 'Examen',
        text: 'Aprenda las señas con un examen',
        status: false,
        routing: 'AC6'
    }
]

export const MenuActivity = () => {
    const { lectionId } = useParams();

    const activitiesCompleted = Activities.filter(activity => activity.status === true).length;
    const totalActivities = Activities.length;
    const progress = (activitiesCompleted / totalActivities) * 100;


    return(
        <section className="MenuActivity bg-white p-12 box-border w-full flex flex-col gap-8"> 
            <article className="ResumeLection flex gap-4 w-full box-border">
                <img className="ResumeLection--Img h-24 " src="http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png" alt="sena" />
                <div className='flex flex-col gap-0 justify-center'>
                    <p className="ResumeLection--Text font-bold text-base text-slate-400">ACTIVIDAD {activity.num_by_lesson}</p>
                    <h4 className="ResumeLection--Title text-2xl text-black">Título: {activity.name}</h4>
                    <h4 className="ResumeLection--Title text-xl text-black">{activity.description}</h4>
                    <p className="ResumeLection--Oblig text-base text-black">Creada por <strong>Enseniando</strong></p>
                </div>
            </article>
            <div className='flex items-center gap-4 w-full justify-between'>
                <h3>Partes de la clase</h3>
                <div className='flex flex-col '>
                    <p>Progreso:</p>
                    <LinearProgress className='w-44' variant="determinate" value={progress} />
                </div>
            </div>
            <article className='MenuActivity flex flex-col gap-2' >
                {
                    Activities.map((item, index) => (
                        <Link className='flex gap-4 items-center no-underline text-black' to={`../Lection/${lectionId}/${item.routing}`}>
                            <div className={'MenuActivity--Icon flex justify-center items-center text-white rounded-lg p-1.5 ' + (item.status ? 'MenuActivity--Icon__Completed' : '')}>
                                <PlayArrowIcon/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h6 className='MenuActivity--Title text-base'>
                                    { item.title }
                                </h6>
                                <p className='MenuActivity--Text text-sm'>
                                    { item.text }
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </article>
        </section>
    )
}