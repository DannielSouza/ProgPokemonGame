import React from 'react'
import style from '../Styles/PokemonsSpecialsResume.module.css'

const BlastoiseSpecialResume = ({setBlastoiseSpecialResume, blastoiseSpecialResume}) => {

  function closeResume(){
    setBlastoiseSpecialResume(false)
  }

  if(blastoiseSpecialResume)return (
    <section onClick={closeResume} className={style.container}>
      <div>
      <p>O Bastoise usou seu poder especial, dessa forma causando
          <span className={style.damage}> 2300 de dano</span>
          .
        </p>
      </div>
    </section>
  )
}

export default BlastoiseSpecialResume