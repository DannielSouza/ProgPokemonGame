import React from 'react'
import style from '../Styles/Special.module.css'
import megaCharizard from '../assets/MegaCharizarad.gif'
import shildBuff from '../assets/shild.gif'

const Special = ({specialCount, pokemon, setPlayer, setBastoiseSuper}) => {
  const specialButton = React.useRef()

  function activeSpecialPower(){
    if(pokemon === 'Charizard'){ 
      setPlayer((before) =>({
        name: 'Mega Charizard',
        hp: before.hp + 600,
        atack: before.atack + 30, 
        img: megaCharizard
      }))
    }
    if(pokemon === 'Blastoise'){ 
      setBastoiseSuper(true)
      setTimeout(()=>{
        setBastoiseSuper(true)
      },500)
    }
    if(pokemon === 'Venusaur'){
      setPlayer((before) =>({
        ...before,
        hp: before.hp + 3500,
        buff: shildBuff
      }))
    }

    specialButton.current.setAttribute("disabled", "disabled")
  }
  





  if(specialCount > 0) return(
    <button disabled className={style.optionSpecial}>
      SUPER
      <h4 className={style.count}>{specialCount}</h4>
    </button>
  )
  return (
    <button ref={specialButton} onClick={activeSpecialPower} className={style.optionSpecial}>
      SUPER
      <h4 className={style.count}>{specialCount}</h4>
    </button>
  )
}

export default Special