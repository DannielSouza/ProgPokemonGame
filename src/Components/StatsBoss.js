import React from 'react'
import style from '../Styles/Stats.module.css'

const StatsBoss = ({name, hp}) => {
  return (
    <div>
      <div className={style.itemContainerBoss}>
        <h3>Nome: {name}</h3>

        <div className={style.containerBar}>
          <div className={style.lifeBarContainer}></div>
            <h4>HP: {hp}</h4>
            <div style={{width: hp / 7 +"px"}} className={style.lifeBar}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsBoss