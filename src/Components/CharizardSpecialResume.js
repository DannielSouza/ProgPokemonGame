import React from 'react'
import style from '../Styles/PokemonsSpecialsResume.module.css'

const CharizardSpecialResume = ({setCharizardSpecialResume, charizardSpecialResume}) => {

  function closeResume(){
    setCharizardSpecialResume(false)
  }

  if(charizardSpecialResume)return (
    <section onClick={closeResume} className={style.container}>
      <div>
      <p>O Charizard usou seu poder especial, dessa forma curando 
          <span className={style.heal}> 1000 pontos de vida </span>
          e  ganhando mais
          <span className={style.damage}> 30 de dano de ataque</span>
          .
        </p>
      </div>
    </section>
  )
}

export default CharizardSpecialResume