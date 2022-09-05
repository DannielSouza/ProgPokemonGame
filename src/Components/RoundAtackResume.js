import React from 'react'
import style from '../Styles/RoundResume.module.css'

const RoundAtackResume = ({pokemonDamage, bossDamage, setRoundAtackResume}) => {
  console.log(pokemonDamage, bossDamage)


  if(bossDamage)return (
    <section onClick={()=>setRoundAtackResume(false)} className={style.container}>
      <div>
        <p>Você causou <span>{pokemonDamage} pontos de vida</span> no Mewtwo, e ele te causou <span>{bossDamage} pontos de vida</span>.</p>
      </div>
    </section>
  )
}

export default RoundAtackResume