import { useParams, Link } from 'react-router-dom';

import './AC1.scss'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const activity = {
    name: "Imágenes con señas",
    description: "Aprendamos las vocales juntos",
    flag_completed: false,
    num_by_lesson: 1
}
const letters = [
  {
    "name": "B",
    "description": "Consonante B",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/b.png"
  },
  {
    "name": "C",
    "description": "Consonante C",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/c.png"
  },
  {
    "name": "D",
    "description": "Consonante D",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/d.png"
  },
  {
    "name": "F",
    "description": "Consonante F",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/d.png"
  },
  {
    "name": "G",
    "description": "Consonante G",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/g.png"
  },
  {
    "name": "H",
    "description": "Consonante H",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/h.png"
  },
  {
    "name": "J",
    "description": "Consonante J",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/j.png"
  },
  {
    "name": "K",
    "description": "Consonante K",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/k.png"
  },
  {
    "name": "L",
    "description": "Consonante L",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/l.png"
  },
  {
    "name": "M",
    "description": "Consonante M",
    "kind": "image",
    "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/m.png"
  }
]

export const AC1 = () => {
    const { lectionId } = useParams();

    return (
        <section className="AC1 bg-white p-12 box-border w-full flex flex-col gap-8"> 
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
                <Link to={`../Lection/${lectionId}/Menu`}>
                    <ArrowBackIcon className='' />
                </Link>
                <Link to={`../Lection/${lectionId}/AC2`}>
                    <ArrowForwardIcon className='' />
                </Link>
            </div>
        </section>
    )
}