import { Button } from '../Button';
import './PrCard.css';
import Sena_1 from '../../../assets/Sena_1.png';
import Sena_2 from '../../../assets/Sena_2.png';
import Sena_3 from '../../../assets/Sena_3.png';
import { Link } from 'react-router-dom';

function PrCard(props: any) {
    return(
        <article className="PrCard flex flex-col items-center justify-between gap-1">
            <div className="PrCard--Border">
                {props.url == 1 && <img className="PrCard--Border--Img" src={Sena_1} alt="sena" />}
                {props.url == 2 && <img className="PrCard--Border--Img" src={Sena_2} alt="sena" />}
                {props.url == 3 && <img className="PrCard--Border--Img" src={Sena_3} alt="sena" />}
            </div>
            <h3 className="PrCard--Title font-bold text-2xl">{props.title}</h3>
            <p className="PrCard--Text text-base">{props.text}</p>
            <Link to={`/Platform/Lection${props.url}`}>
                <Button design="ButtonSec Green">Jugar</Button>
            </Link>
        </article>
    )
}

export { PrCard }