import { useState } from "react"
import './App.css'
import Elemento from './Elemento'
import Reiniciar from "./Reiniciar"

function App() {

  const colores = ['roja','verde']

  const giveColor = (index) => {
    let nElementos = [...elementos]
    nElementos[index] = turno;
    let nTurno = (turno * -1) + 1
    setTurno(nTurno)
    setElementos(nElementos)

    // console.log(nElementos);
    // console.log(nTurno);
  }

  

  const [turno,setTurno] = useState(0);
  const [elementos,setElementos] = useState(Array(6).fill(null))

  const reiniciar = () => {
    setTurno(0)
    setElementos(Array(6).fill(null))
    console.log('Reiniciado');
  }


  return (
    <>
      <section className="App">
        {elementos.map((elemento,index) => {
          return(
            <Elemento key = {index} 
              getColor = {giveColor} 
              initialClase ={elementos[index] == null ? '' : colores[elementos[index]]}
              index = {index}  
            />  
          )
        })}
      </section>
      <Reiniciar reiniciar={reiniciar}></Reiniciar>
    </>
  )
}

export default App
