import { Button } from '../common/Button';
import './Header.css'
import logoUrl from '../../assets/Logo_init.png'
import { Link } from 'react-router-dom';

function disLogin(){
    localStorage.removeItem("user");
    window.location.reload();
}

export const Header = () => {
    let userData: string | null = localStorage.getItem("user") ? localStorage.getItem("user") : "";
    console.log(userData);

    return(
        <header className="Header flex justify-between items-center md:px-24 md:w-full box-border px-8">
            <img className="Header--Logo" alt="logo" src={logoUrl} />
            <nav className="Header--Nav hidden md:inline">
                <ol className="Header--Nav--Content">
                    <Link to="/" className="Header--Nav--Content--Item decoration-none text-base no-underline text-black"><span>Inicio</span></Link>
                    <Link to="/Platform" className="Header--Nav--Content--Item text-base no-underline text-black"><span>Plataforma</span></Link>
                    <Link to="/" className="Header--Nav--Content--Item text-base no-underline text-black"><span>Diccionario</span></Link>
                </ol>
            </nav>
            <div className="Header--Button flex items-center">
                { (userData == null || userData == "") &&   
                    <>
                        <Link to="/auth/Login">
                            <Button>Iniciar sesión</Button>
                        </Link>
                        <Link to="/auth/Register">
                            <Button>Registro</Button>
                        </Link>
                    </>
                }
                {(userData != null && userData != "") &&   
                    <>
                        <p className='text-base font-semibold text-black'>{userData}</p>
                        <Link to="/Perfil/Inicio">
                            <div className="w-12 h-12 rounded-xl bg-teal-100"></div>
                        </Link>
                    </>
                }
            </div>
        </header>
    )
}