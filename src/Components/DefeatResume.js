import React from 'react'
import style from '../Styles/WinOrDefeatResume.module.css'

const DefeatResume = () => {
  return (
    <section className={style.container}>
      <div className={style.itemContainer}>
        <h1 className={style.titleDefeat}>Derrota!</h1>
        <p>Não foi dessa vez, o Mewtwo te derrotou.</p>

        <button onClick={()=> document.location.reload(true)}>Inicio</button>
      </div>
    </section>
  )
}

export default DefeatResume