import React from 'react'
import styles from './Home.module.css'
import { Cardbox } from './CardBox'

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Cardbox />
    </div>
 )
}