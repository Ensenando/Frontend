import { useState, useEffect } from 'react';

import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import './NotificationCard.scss'

export const NotificationCard = ({ item }: any) => {
    const [styleBg, setStyleBg] = useState('');
    const [readable, setReadable] = useState(item.read);

    useEffect(() => {
        if (item.type === "Alert") 
            setStyleBg('#F6CBCB');
        else if (item.type === "Success")
            setStyleBg('#C8F399');
    }, [item.type]);

    return (
        <article className={"NotificacionCard px-16 py-4 NotificacionCard--" + item.type} style={{  backgroundColor: !readable ? styleBg : 'initial' }}>
            { item.type == "Alert" ? <ErrorOutlineOutlinedIcon style={{color: 'red'}}/> : <CheckCircleOutlinedIcon style={{color: 'green'}}/>}
            <div className='flex flex-col gap-4'>
                <h3 className="NotificacionCard--Title">{ item.title }</h3>
                <p>{ item.text }</p>
                <div className='w-full flex'>
                    <p onClick={() => {setReadable(true)}} className='NotificacionCard--Mark'>Marca como leído</p>
                </div>
            </div>
        </article>
    )
}