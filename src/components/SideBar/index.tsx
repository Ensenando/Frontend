import { useState } from "react";

import "./SideBar.scss"

import { ResumeLection } from "../common/ResumeLection";

const todosTotal = [
    {
        title: "Vocales",
        text: "Vocales del abecedario",
        image: "http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png",
        progress: 0,
        type: "Obligatorio",
        url: 'LE01'
    },
    {
        title: "Consonantes 1",
        text: "Parte 1 de consonantes del abecedario",
        image: "http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png",
        progress:0,
        type: "Obligatorio",
        url: 'LE02'
    },
    {
        title: "Consonantes 2",
        text: "Parte 2 de consonantes del abecedario",
        image: "http://www.aumentaty.com/community/wp-content/uploads/2019/06/Picture_20190614011121.png",
        progress: 0,
        type: "Obligatorio",
        url: 'LE03'
    }
];

export const SideBar = () => {
    let [lectionsTotal, setLectionsTotal] = useState("allLections");
    let [visualLections, setVisualLections] = useState(todosTotal);
    
    let toggleAll = (name: string) => {
        let inputElementAll = document.getElementById("allLections") as HTMLInputElement;
        let inputElementOblig = document.getElementById("obligLections") as HTMLInputElement;
        let inputElementElec = document.getElementById("elecLections") as HTMLInputElement;

        if(name == "allLections"){
            inputElementOblig.classList.remove("SideBar--Content--Selected");
            inputElementElec.classList.remove("SideBar--Content--Selected");
            inputElementOblig.classList.add("SideBar--Content--NoSelected");
            inputElementElec.classList.add("SideBar--Content--NoSelected");
    
            inputElementAll.classList.toggle("SideBar--Content--Selected");
            inputElementAll.classList.toggle("SideBar--Content--NoSelected");

            setVisualLections(todosTotal);
        }
    
        if(name == "obligLections"){
            inputElementAll.classList.remove("SideBar--Content--Selected");
            inputElementElec.classList.remove("SideBar--Content--Selected");
            inputElementAll.classList.add("SideBar--Content--NoSelected");
            inputElementElec.classList.add("SideBar--Content--NoSelected");
    
            inputElementOblig.classList.toggle("SideBar--Content--Selected");
            inputElementOblig.classList.toggle("SideBar--Content--NoSelected");

            setVisualLections(todosTotal);
        }
    
        if(name == "elecLections"){
            inputElementOblig.classList.remove("SideBar--Content--Selected");
            inputElementAll.classList.remove("SideBar--Content--Selected");
            inputElementOblig.classList.add("SideBar--Content--NoSelected");
            inputElementAll.classList.add("SideBar--Content--NoSelected");
    
            inputElementElec.classList.toggle("SideBar--Content--Selected");
            inputElementElec.classList.toggle("SideBar--Content--NoSelected");

            setVisualLections([]);
        }

        setLectionsTotal(name);
    }

    return (
        <aside className="SideBar py-8 px-10 box-border flex flex-col">
            <h4 className="text-3xl">Lecciones</h4>
            <nav className="SideBar--Content mt-4 flex list-none w-full justify-between box-border p-1.5">
                <li className="SideBar--Content--Item SideBar--Content--Selected" id="allLections" onClick={() => toggleAll("allLections")}>Todo</li>
                <li className="SideBar--Content--Item SideBar--Content--NoSelected" id="obligLections" onClick={() => toggleAll("obligLections")}>Obligatorios</li>
                <li className="SideBar--Content--Item SideBar--Content--NoSelected" id="elecLections"onClick={() => toggleAll("elecLections")}>Electivo</li>
            </nav>
            <div className="flex flex-col py-6 gap-4">
                {visualLections.map(todo => (
                    <ResumeLection 
                    key={todo.url} 
                    numero={todo.url} 
                    title={todo.title} 
                    text={todo.text} 
                    type={todo.type} 
                    image={todo.image} 
                    url={todo.url}
                    />
                ))}
            </div>
        </aside>
    )
}