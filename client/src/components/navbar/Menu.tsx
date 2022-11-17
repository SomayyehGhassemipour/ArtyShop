import React from 'react'
import styles from './Menu.module.css'

interface Menu_Ob {
  title?: string,
  icon?: string,
  url: string,
  classname?: string
}
interface Props {
  data:Menu_Ob[],
  type: string,
  isActive?:boolean
}
export const Menu: React.FC<Props> = ({data,type, isActive}) => {
  return (
      <ul className={[styles.nav_menu ,styles[type],(isActive ? styles.active : [])].join(' ')} > 
        {data.map((item, index: number)=>{
          return ( 
            <li key={index}>
              <a href={item.url} className={styles.nav_link} title={item.icon && item.title}> {item.icon && <i className={item.icon+' '+item.classname}></i>}{!item.icon && item.title} </a>
            </li>
          )
        })}
      </ul>
  )
}