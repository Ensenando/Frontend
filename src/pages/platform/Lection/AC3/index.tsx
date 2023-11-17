import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './AC3.scss'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Card {
  id: number;
  pair: number;
  link: string;
  status: boolean;
  index: number;
}

const activity = {
    name: "Videos con señas",
    description: "Videos con señas",
    flag_completed: false,
    num_by_lesson: 3
}
const letters = [
  {
    id: 1,
    pair: 2,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/b.png",
    
  },
  { 
    id: 2,
    pair: 1,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/b.png",
  },
  {
    id: 3,
    pair: 4,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/g.png",
  },{
    id: 4,
    pair: 3,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/g.png",
  },{
    id: 5,
    pair: 6,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/f.png",
  },{
    id: 6,
    pair: 5,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/f.png",
  },{
    id: 7,
    pair: 8,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/c.png",
  },{
    id: 8,
    pair: 7,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/c.png",
  },{
    id: 9,
    pair: 10,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/h.png",
  },{
    id: 10,
    pair: 9,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/h.png"
  },{
    id: 11,
    pair: 12,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/k.png",
  },{
    id: 12,
    pair: 11,
    link: "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE02/AC01/k.png"
  }
]

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const initializeGame = (): Card[] => {
  const originalCards = [...letters];
  const shuffledCards = shuffleArray(originalCards);

  return shuffledCards.map((card: any, index: any) => ({
    ...card,
    status: false,
    index: index,
  }));
};

export const AC3 = () => {
  const { lectionId } = useParams();

  const [cards, setCards] = useState<Card[]>(initializeGame());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [enableClick, setEnableClick] = useState(true);
  
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      const handleTimeout = () => {
        console.log('¡Se acabó el tiempo!');
        setCards(initializeGame());
        setTimeLeft(30); // Puedes ajustar el valor inicial según tus necesidades
        setGameStarted(false); // Reiniciar el juego si es necesario
      };

      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            handleTimeout();
            clearInterval(intervalId);
            return 0;
          }
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [gameStarted]);

  const handleCardClick = (index: number) => {
    if (!gameStarted) {
      setSelectedCards([]);
      setScore(0);
      setGameStarted(true);
    }
    if (enableClick && !cards[index].status && selectedCards.length < 2) {
      const updatedCards = [...cards];
      updatedCards[index].status = true;
      setSelectedCards([...selectedCards, updatedCards[index]]);

      if (selectedCards.length === 1) {
        setEnableClick(false);

        setTimeout(() => {
          if (selectedCards[0].pair === updatedCards[index].id) {
            setScore(score + (timeLeft/30) * 100);
            updatedCards[index].status = true;
            updatedCards[selectedCards[0].index].status = true;
          } else {
            updatedCards[index].status = false;
            updatedCards[selectedCards[0].index].status = false;
          }

          setSelectedCards([]);
          setEnableClick(true);
        }, 1000);
      } else {
        setEnableClick(true);
      }
      setCards(updatedCards);
    }
  };

  console.log(letters.length);
  console.log(cards.length);

  return (
    <section className="AC3 bg-white p-12 box-border w-full flex flex-col gap-8"> 
        <article className="AC3 flex gap-4 w-full box-border">
            <img className="AC3--Img h-24 " src="http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png" alt="sena" />
            <div className='flex flex-col gap-0 justify-center'>
                <p className="AC3--Text font-bold text-base text-slate-400">ACTIVIDAD {activity.num_by_lesson}</p>
                <h4 className="AC3--Title text-2xl text-black">Título: {activity.name}</h4>
                <h4 className="AC3--Title text-xl text-black">{activity.description}</h4>
                <p className="AC3--Oblig text-base text-black">Creada por <strong>Enseniando</strong></p>
            </div>
        </article>
        <div className='flex items-center gap-4 w-full justify-between'>
            <h3>Partes de la clase:</h3>
            <h1 className='text-green'>{ score.toFixed(1) }</h1>
            <p>Tiempo restante: {timeLeft} segundos</p>
        </div>
        <div className="AC3--Container 
        scroll-smooth w-full 
        grid gap-8 grid-cols-3 grid-rows-4 
        items-center justify-items-center">
            {cards.map((item: any, index: any) => (
              <>
                {item.status ? (
                  <img src={item.link} alt="Imagen" onClick={() => handleCardClick(index)} />
                ) : (
                  <div className='AC3--Square cursor-pointer' onClick={() => handleCardClick(index)}></div>
                )}
              </>
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