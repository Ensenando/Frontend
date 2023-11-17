import { useState, useEffect } from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LinearProgress from '@mui/material/LinearProgress';

import './AlumnosCard.scss'

export const AlumnosCard = ({ item }: any) => {
    return (
        <article className="AlumnosCard py-4 
        grid grid-cols-4 grid-rows-1 gap-4 items-center">
            <p>{ item.name }</p>
            <LinearProgress className='self-center'
             variant="determinate" value={item.progress} />
            <p className='AlumnosCard--Text text-center'>{ item.time } h</p>
            <DeleteOutlineOutlinedIcon className='justify-self-center'/>
        </article>
    )
}