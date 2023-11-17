const activity = {
    name: "Aprendizaje",
    description: "Aprendamos la segunda parte de las consonantes juntos",
    flag_completed: false,
    num_by_lesson: 3
}
const letters = [
    {
        "name": "N",
        "description": "Consonante N",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/n.png"
      },
      {
        "name": "P",
        "description": "Consonante P",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/p.png"
      },
      {
        "name": "Q",
        "description": "Consonante q",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/q.png"
      },
      {
        "name": "R",
        "description": "Consonante R",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/r.png"
      },
      {
        "name": "S",
        "description": "Consonante S",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/s.png"
      },
      {
        "name": "T",
        "description": "Consonante T",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/t.png"
      },
      {
        "name": "V",
        "description": "Consonante V",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/v.png"
      },
      {
        "name": "W",
        "description": "Consonante W",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/w.png"
      },
      {
        "name": "X",
        "description": "Consonante X",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/x.png"
      },
      {
        "name": "Y",
        "description": "Consonante Y",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/y.png"
      },
      {
        "name": "Z",
        "description": "Consonante Z",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/z.png"
      },
      {
        "name": "X",
        "description": "Consonante X",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/x.png"
      },
      {
        "name": "Y",
        "description": "Consonante Y",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/y.png"
      },
      {
        "name": "Z",
        "description": "Consonante Z",
        "url": "https://intranet-menorca.nyc3.cdn.digitaloceanspaces.com/data/LE03/AC01/z.png"
      }
]

export const Lection3 = () => {
    return(
        <section className="Lection1 bg-white p-12 box-border w-full flex flex-col gap-8"> 
            <article className="ResumeLection flex gap-4 w-full box-border">
                <img className="ResumeLection--Img h-24 " src="http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png" alt="sena" />
                <div className='flex flex-col gap-0 justify-center'>
                    <p className="ResumeLection--Text font-bold text-base text-slate-400">ACTIVIDAD {activity.num_by_lesson}</p>
                    <h4 className="ResumeLection--Title text-2xl text-black">Título: {activity.name}</h4>
                    <h4 className="ResumeLection--Title text-xl text-black">{activity.description}</h4>
                    <p className="ResumeLection--Oblig text-base text-black">Creada por <strong>Enseniando</strong></p>
                </div>
            </article>
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
        </section>
    )  
}