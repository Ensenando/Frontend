import { useState } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Button } from '../../../components/common/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Register.scss';

import Logo_Nombre from '../../../assets/Logo_Nombre.png';
import Sena_1 from '../../../assets/Sena_1.png';
import Sena_2 from '../../../assets/Sena_2.png';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export const Register = () => {
  let InputContainer = 'w-full flex flex-col xl:flex-row self-start justify-between gap-2'
  let LabelStyle = 'Register--Container--Label font-bold'
  let InputStyle = 'Register--Container--Input w-full px-4 xl:w-7/12 h-9 2xl:w-9/12';
  
  let SenaStyle = 'absolute top-[15%] lg:top-[11%] xl:top-[16%] w-24 h-24 lg:w-36 lg:h-36 xl:h-52 xl:w-52';

  let [userInput, setUserInput] = useState("");
  let [passwordInput, setPasswordInput] = useState("");
  let [emailInput, setEmailInput] = useState("");
  let [namesInput, setNamesInput] = useState("");
  let [lastnameInput, setLastnameInput] = useState("");
  let [dateInput, setDateInput] = useState("");
  let [rolInput, setRolInput] = useState("");

  const handleInput = (name: string, event: any) => {
    if(name == "userInput")
      setUserInput(event.target.value);

    if(name == "passwordInput")
      setPasswordInput(event.target.value);

    if(name == "emailInput")
      setEmailInput(event.target.value);
    
    if(name == "namesInput")
      setNamesInput(event.target.value);

    if(name == "lastnameInput")
      setLastnameInput(event.target.value);

    if(name == "dateInput")
      setDateInput(event.target.value);

  }

  const handleRol = (event: SelectChangeEvent) => {
    setRolInput(event.target.value as string);
  };
    
  const RegisterUser = () => {
    let data = {
      names: userInput,
      surnames: "string",
      email: emailInput,
      nationality: "Perú",
      date_of_birth: "2002-05-07",
      role: "Estudiante",
      password: passwordInput
    } 

    // localStorage.setItem("user", "Jesus");

    axios.post('http://127.0.0.1:8000/user/register/', data)
    .then(response => {
      window.location.reload();
    }
    )
    .catch(error => {
        console.error('There was an error!', error);
    });
  }

  return (
    <section className="Register w-screen h-screen pb-8 box-border flex flex-col justify-center items-center gap-4">
      <img className='w-20 h-20' src={Logo_Nombre} alt="" />
      <article className='Register--Container flex flex-col justify-center items-center
      w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 xl:h-1/2 
      px-6 md:px-12 lg:px-24 bg-white box-border gap-6 py-12' >
        <img className={'Register--Container--Left left-4 md:left-[10%] lg:left-[15%] xl:left-[17.5%] ' + SenaStyle} src={Sena_1} alt="seña_2" />
        <img className={'Register--Container--Right right-4 md:right-[10%] lg:right-[15%] xl:right-[20%] ' + SenaStyle} src={Sena_2} alt="seña_3" />
        <h3 className='Register--Container--Title text-4xl font-extrabold' >Registro</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div className={InputContainer}>
            <label className={LabelStyle} htmlFor="firstname">Nombres</label>
            <input className={InputStyle} value={namesInput} onChange={() => handleInput("namesInput", event)} type="text" id='names'/>
          </div>
          <div className={InputContainer}>
            <label className={LabelStyle} htmlFor="surname">Apellidos</label>
            <input className={InputStyle} value={lastnameInput} onChange={() => handleInput("lastnameInput", event)} type="text" id='lastnames'/>
          </div>
          <div className={InputContainer}>
            <label className={LabelStyle} htmlFor="username">Usuario</label>
            <input className={InputStyle} value={userInput} onChange={() => handleInput("userInput", event)} type="text" id='username'/>
          </div>
          <div className={InputContainer}>
            <label className={LabelStyle} htmlFor="password">Contraseña</label>
            <input className={InputStyle} type="password" id='password'/>
          </div>
          <div className={InputContainer}>
            <label className={LabelStyle} htmlFor="password2">Repita contraseña</label>
            <input className={InputStyle} value={passwordInput} onChange={() => handleInput("passwordInput", event)} type="password" id='password2'/>
          </div>
          <div className={InputContainer}>
            <label className={LabelStyle} htmlFor="email">Correo</label>
            <input className={InputStyle} value={emailInput} onChange={() => handleInput("emailInput", event)} type="text" id='email'/>
          </div>
          <div className={InputContainer}>
            <label className={LabelStyle} htmlFor="date">Correo</label>
            <input className={InputStyle} value={dateInput} onChange={() => handleInput("dateInput", event)} type="date" id='date'/>
          </div>
          <div className={InputContainer}>
            <label className={LabelStyle} htmlFor="rol">Rol</label>
            <Select className={InputStyle} value={rolInput}  type="text" id='rol'
              onChange={handleRol}
            > 
              <MenuItem value={1}>Estudiante</MenuItem>
              <MenuItem value={2}>Profesor</MenuItem>
            </Select>
          </div>
        </div>
        <Link onClick={RegisterUser} to='/'>
          <Button design="Purple-2">
            Registrarme
          </Button>
        </Link>
      </article>
      <Link to='/'>
        <Button>
          <span className='hidden xl:inline'>Regresar</span>
          <div className='inline xl:hidden'>
            <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
          </div>
        </Button>
      </Link>
    </section>
  );
};
