import { useState } from "react"
import './Elemento.css'

function Elemento({initialClase,getColor,index}){
    const [clase,setClase] = useState(initialClase)

    return(
        <button className={initialClase} onClick = { () => {
            console.log('Click');
            getColor(index)
        }}>
            {initialClase}
        </button>
    )
}

export default Elemento;