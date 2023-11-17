import { Children } from 'react'
import './Button.css'

function Button(props: any) {
    return(
        <button className={`Button ${props.design} `}>
            { props.children }
        </button>
    )
}

export { Button }