import './Footer.css'
import logoUrl from '../../assets/Logo_init.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return(
        <footer className="Footer flex flex-col items-center xl:justify-between gap-4 box-border 
        md:gap-8 md:flex-row md:justify-between 
        p-8 md:p-12 xl:p-24">
            <img className="Footer--Logo w-auto" alt="logo" src={logoUrl} />
            <nav className="Footer--Nav flex flex-col h-full items-center 
            md:items-start justify-start gap-4 list-none">
                <li className="Header--Nav--Title font-bold mt-3.5 md:mt-0 md:mb-3.5">NAVEGACIÓN</li>
                <li className="Header--Nav--Item"><span>Inicio</span></li>
                <li className="Header--Nav--Item"><span>Plataforma</span></li>
                <li className="Header--Nav--Item"><span>Diccionario</span></li>
            </nav>
            <nav className="Footer--Nav flex flex-col h-full items-center 
            md:items-start justify-start gap-4 list-none">
                <li className="Header--Nav--Title font-bold mt-3.5 md:mt-0 md:mb-3.5">CONTACTO</li>
                <li className="Header--Nav--Item"><span>Calle aña 123, Antartida</span></li>
                <li className="Header--Nav--Item"><span>+51 987 654 321</span></li>
                <li className="Header--Nav--Item"><span>correo@correo.com</span></li>
            </nav>
            <nav className="Footer--Nav flex flex-col h-full items-center 
            md:items-start justify-start gap-4  list-none">
                <li className="Header--Nav--Title font-bold mt-3.5 md:mt-0 md:mb-3.5">CONÉCTATE</li>
                <div className="flex gap-4">
                    <FacebookOutlinedIcon className='cursor-pointer'></FacebookOutlinedIcon>
                    <WhatsAppIcon className='cursor-pointer'></WhatsAppIcon>
                    <InstagramIcon className='cursor-pointer'></InstagramIcon>
                </div>
            </nav>
        </footer>
    )
}

export { Footer }
