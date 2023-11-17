

import { Link } from "react-router-dom";
import "./ProfileSideBar.scss"

import LinearProgress from '@mui/material/LinearProgress';

const InfoUser = {
    name: 'Jesús Daniel Romero Rivera',
    username: 'Rpepe',
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    progress: 60,
    type: "PROFESOR"
}

const listNavStudent = [
    {
        name: "Mi perfil",
        link: "/Perfil/Inicio",
        cod: "Inicio"
    },
    {
        name: "Personaliza tu plataforma",
        link: "/Perfil/Personalizacion",
        cod: "Personalizacion"
    }
]

const listNavTutor = [
    {
        name: "Mi perfil",
        link: "/Perfil/Inicio",
        cod: "Inicio"
    },
    {
        name: "Notificaciones",
        link: "/Perfil/Notificaciones",
        cod: "Notificaciones"
    },
    {
        name: "Alumnos",
        link: "/Perfil/Alumnos",
        cod: "Alumnos"
    },
    {
        name: "Informes del Estudiante",
        link: "/Perfil/Informes",
        cod: "Informes"
    },
    {
        name: "Aprender sobre la plataforma",
        link: "/Perfil/Tutoriales",
        cod: "Tutoriales"
    },
    {
        name: "Eventos",
        link: "/Perfil/Eventos",
        cod: "Eventos"
    },
]

export const ProfileSideBar = () => {
    const pathname = window.location.pathname;
    const segmentos = pathname.split('/');
    const idLink: string = segmentos.pop() || "";

    let actualAuxNav = (InfoUser.type == "ESTUDIANTE") ? listNavStudent :
    ((InfoUser.type == "PROFESOR") ? listNavTutor : [] ) 

    return (
        <aside className="ProfileSideBar box-border flex flex-col w-4/12 box-border rounded-3xl">
            <article className="flex flex-col gap-2 justify-center items-center py-12">
                <img className="ProfileSideBar--Img h-20 w-20" src={InfoUser.img} alt="profile" />
                <h3 className="ProfileSideBar--Title text-base">{InfoUser.name}</h3>
                <p className="ProfileSideBar--Title text-base">{InfoUser.username}</p>
            </article>
            <section className="bg-white px-4 py-6 box-border">
                <h3 className="ProfileSideBar--Title text-base">Progreso total: {InfoUser.progress}%</h3>
                <LinearProgress variant="determinate" value={InfoUser.progress} />
            </section>
            <div className="pb-8 bg-white  rounded-3xl">
                {actualAuxNav.map((item, index) => (
                    <li id={item.cod} 
                    className={`ProfileSideBar--Navbar list-none py-4 px-8 ${(idLink == item.cod) ? "ProfileSideBar--Selected" : ""}`} >
                        <Link className="ProfileSideBar--Text text-white no-underline box-border" reloadDocument to={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))
                }
            </div>
        </aside>
    )
}