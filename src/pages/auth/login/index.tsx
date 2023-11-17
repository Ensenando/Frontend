import { useState } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Button } from '../../../components/common/Button';
import './Login.scss';

import Logo_Nombre from '../../../assets/Logo_Nombre.png';
import Sena_2 from '../../../assets/Sena_2.png';
import Sena_3 from '../../../assets/Sena_3.png';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

async function loginUser(){
}


export const Login = () => {
  let InputContainer = 'w-full flex flex-col xl:flex-row self-start justify-between gap-2'
  let LabelStyle = 'Login--Container--Label font-bold'
  let InputStyle = 'Login--Container--Input w-full px-4 xl:w-8/12 h-9 2xl:w-10/12';
  
  let SenaStyle = 'absolute top-[14%] lg:top-[10%] xl:top-[12%] w-24 h-24 lg:w-36 lg:h-36 xl:h-52 xl:w-52';

  let [userInput, setUserInput] = useState("");
  let [passwordInput, setPasswordInput] = useState("");

  const handleInput = (name: string, event: any) => {
    if(name == "userInput")
      setUserInput(event.target.value);

    if(name == "passwordInput")
      setPasswordInput(event.target.value);

  }

  let loginUser = () => {
    let data = {
      email: userInput,
      password: passwordInput
    } 
    
    axios.post('http://127.0.0.1:8000/user/login/', data)
    .then(response => {
      localStorage.setItem("user", response.data.user);
      window.location.reload();
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
    
  }

  return (
    <section className="Login w-screen h-screen pb-16 box-border flex flex-col justify-center items-center gap-8">
      <img className='w-24 h-24 ' src={Logo_Nombre} alt="" />
      <article className='Login--Container flex flex-col justify-center items-center
      w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 xl:h-1/2 
      px-6 md:px-12 lg:px-24 bg-white box-border gap-6
      py-4' >
        <img className={'Login--Container--Left left-4 md:left-[10%] lg:left-[15%] xl:left-[17.5%] ' + SenaStyle} src={Sena_2} alt="seña_2" />
        <img className={'Login--Container--Right right-4 md:right-[10%] lg:right-[15%] xl:right-[20%] ' + SenaStyle} src={Sena_3} alt="seña_3" />
        <h3 className='Login--Container--Title text-4xl font-extrabold' >Inicio de sesión</h3>
        <div className={InputContainer}>
          <label className={LabelStyle} htmlFor="username">Usuario</label>
          <input className={InputStyle} value={userInput} onChange={() => handleInput("userInput", event)} type="text" id='username'/>
        </div>
        <div className={InputContainer}>
          <label className={LabelStyle} htmlFor="password">Contraseña</label>
          <input className={InputStyle} value={passwordInput} onChange={() => handleInput("passwordInput", event)} type="password" id='password'/>
        </div>
        <Link onClick={loginUser} to='/'>
          <Button design="Purple-2">Ingresar</Button>
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
