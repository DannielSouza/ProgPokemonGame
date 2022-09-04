import React from 'react'
import style from '../Styles/Screen.module.css'
import ChoosePokemon from './ChoosePokemon'
import Gameboard from './Gameboard'

const Screen = () => {
  const [pokemon, setPokemon] = React.useState(null)

  React.useEffect(()=>{

  },[])


  return (
    <section className={style.screenContainer}>
      {!pokemon && <ChoosePokemon setPokemon={setPokemon}/>}
      
      {pokemon && <Gameboard pokemon={pokemon}/>}
    </section>
  )
}

export default Screen