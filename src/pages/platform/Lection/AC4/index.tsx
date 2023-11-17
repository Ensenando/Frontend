import { useParams, Link } from 'react-router-dom';

import './AC4.scss'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const activity = {
    name: "Videos con señas",
    description: "Videos con señas",
    flag_completed: false,
    num_by_lesson: 1
}
const letters = [
  {
    "image1": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/b.png",
    "image2": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/c.png",
    "image3": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/d.png",
    "image4": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/g.png",
    "image5": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/f.png",
    "pairimage1": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/b.png",
    "pairimage2": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/c.png",
    "pairimage3": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/d.png",
    "pairimage4": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/g.png",
    "pairimage5": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/f.png"
  }
]

export const AC4 = () => {
    const { lectionId } = useParams();
    const images = Object.values(letters[0]); 
    console.log(images);

    return (
        <section className="AC4 bg-white p-12 box-border w-full flex flex-col gap-8"> 
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
            <div className="scroll-smooth w-full grid gap-4 grid-cols-3 grid-rows-3">
                {images.map((imageSrc, index) => (
                    <img src={imageSrc} />
                ))}
            </div>
            <div className='flex items-center gap-4 w-full justify-between' >
                <Link to={`../Lection/${lectionId}/AC2`}>
                    <ArrowBackIcon className='' />
                </Link>
                <Link to={`../Lection/${lectionId}/AC4`}>
                    <ArrowForwardIcon className='' />
                </Link>
            </div>
        </section>
    )
}