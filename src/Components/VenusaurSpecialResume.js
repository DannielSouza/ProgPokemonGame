import React from 'react'
import style from '../Styles/PokemonsSpecialsResume.module.css'

const VenusaurSpecialResume = ({setVenusaurSpecialResume, venusaurSpecialResume}) => {

  function closeResume(){
    setVenusaurSpecialResume(false)
  }

  if(venusaurSpecialResume)return (
    <section onClick={closeResume} className={style.container}>
      <div>
        <p>O Venossauro usou seu poder especial, dessa forma curando 
          <span className={style.heal}> 1500 pontos de vida</span>.
        </p>
      </div>
    </section>
  )
}

export default VenusaurSpecialResume