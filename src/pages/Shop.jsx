import React from 'react'

import styles from '../styles/Shop.module.css'

//images
import Model from '../public//img/model.png'

const Kauppa = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text_side}>
        <h2>Vaatetori</h2>
        <p>Meneville ihmisille</p>
      </div>
      <div className={styles.image_side}>
        <img src={Model} alt="Mallin kuva" />
      </div>
    </section>
  )
}

export default Kauppa