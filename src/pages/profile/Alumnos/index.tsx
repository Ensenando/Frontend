import { useState } from "react";

import { AlumnosCard } from "../../../components/common/AlumnosCard";

import { Button } from "../../../components/common/Button";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import "./Alumnos.scss";

const AlumnosContent = [
  {
    name: 'Jesús Romero',
    progress: 47,
    time: 32,
  },{
    name: 'Emanuel Ticona',
    progress: 13,
    time: 12,
  },{
    name: 'Jesús Romero 2',
    progress: 76,
    time: 6,
  },{
    name: 'Emanuel Ticona 2',
    progress: 65,
    time: 80,
  }
] 

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 3,
  px: 3,
  pb: 3,
  borderRadius: '15px',
};

export const Alumnos = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="Alumnos bg-white w-full 
    px-16 py-8 gap-4
    rounded-3xl box-border 
    flex flex-col
    ">
      <div>
        <Button design="Dark" className="AlumnosCard--Title">
          <div onClick={handleOpen} className="flex items-center gap-2">
            <AddCircleOutlineOutlinedIcon className=""/> 
            <p>Agregar estudiante</p>
          </div>
        </Button>
      </div>
      <h1 className="AlumnosCard--Title">Lista de alumnos</h1>
      <article className="AlumnosCard  
        grid grid-cols-4 grid-rows-1 gap-4 items-center">
        <p className="Alumnos--Title">Alumno</p>
        <p className="Alumnos--Title text-center">Progreso</p>
        <p className="Alumnos--Title text-center">Duración</p>
        <p className="Alumnos--Title text-center">Acciones</p>
      </article>
      <div className="flex flex-col">
        {AlumnosContent.map((item) => (
          <AlumnosCard item={item}/>
        ))
        }

      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="flex flex-col gap-4 items-center w-full" sx={{ ...style, width: 300 }}>
          <h2 className="text-center text-xl" id="child-modal-title">Ingrese el nickname</h2>
          <input className="Alumnos--Title rounded-md px-4 py-2 w-full" type="text" />
          <Button>
            <div className="AlumnosCard--Title" onClick={handleClose}>
              Buscar
            </div>
          </Button>
        </Box>
      </Modal>
    </section>
  );
};
