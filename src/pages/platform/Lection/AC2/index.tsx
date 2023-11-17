import { useParams, Link } from 'react-router-dom';

import './AC2.scss'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const activity = {
    name: "Videos con señas",
    description: "Videos con señas",
    flag_completed: false,
    num_by_lesson: 2
}
const letters = [
  {
    "name": "B",
    "description": "Video B",
    "kind": "video",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/b.png"
  },
  {
    "name": "C",
    "description": "Video C",
    "kind": "video",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/c.png"
  }
]

export const AC2 = () => {
    const { lectionId } = useParams();

    return (
        <section className="AC2 bg-white p-12 box-border w-full flex flex-col gap-8"> 
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
                <h3>Partes de la clase:</h3>
            </div>
            <div className="scroll-smooth h-full flex flex-col gap-6">
                {letters.map(todo => (
                    <article className="w-full flex gap-4">
                        <img className="" src={todo.url} alt="" />
                        <div className="flex flex-col justify-center ga-4">
                            <h4 className="ResumeLection--Title text-2xl text-black">Título: {todo.name}</h4>
                            <p className="ResumeLection--Oblig text-base text-black">Descripción: {todo.description}</p>
                        </div>
                    </article> 
                ))}
            </div>
            <div className='flex items-center gap-4 w-full justify-between' >
                <Link to={`../Lection/${lectionId}/AC1`}>
                    <ArrowBackIcon className='' />
                </Link>
                <Link to={`../Lection/${lectionId}/AC3`}>
                    <ArrowForwardIcon className='' />
                </Link>
            </div>
        </section>
    )
}