import { NotificationCard } from "../../../components/common/NotificationCard";

import "./Notificaciones.scss";

const NotificacionesProp = [
  {
    title: 'Problemas con el aprendizaje',
    text: 'El alumno Añauwu123, se hace tardado en resolver el módulo 1 - 1h y el juego 2 - 3h. Será bueno si se puede revisar si hay un problema',
    read: false,
    type: "Alert",
  },{
    title: 'Problemas con el aprendizaje',
    text: 'El alumno Añauwu123, se hace tardado en resolver el módulo 1 - 1h y el juego 2 - 3h. Será bueno si se puede revisar si hay un problema',
    read: false,
    type: "Alert",
  },{
    title: '¡En hora buena!',
    text: 'El 90% de sus alumnos han cumplido con su meta de este mes. ¡Sigue así Maestro!',
    read: true,
    type: "Success",
  },{
    title: 'Problemas con el aprendizaje',
    text: 'El alumno patitopatito, se ha tardado en resolver el módulo 1 - 1h y el juego 2 - 3h. Será bueno si se puede revisar si hay un problema.',
    read: true,
    type: "Alert",
  },{
    title: 'Problemas con el aprendizaje',
    text: 'El 90% de sus alumnos han cumplido con su meta de este mes. ¡Sigue así Maestro!',
    read: true,
    type: "Alert",
  }
] 

export const Notificaciones = () => {
  return (
    <section className="Personalizacion bg-white w-full rounded-3xl box-border py-8
    flex flex-col">
        {NotificacionesProp.map((item, index) => (
          <NotificationCard item={item}/>
        ))
        }
    </section>
  );
};
