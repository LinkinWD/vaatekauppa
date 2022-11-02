import React, {  useEffect, useState } from 'react'

import styles from '../styles/Shop.module.css'

//images
import Model from '../public//img/model.png'

const Kauppa = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  //json server käytässä json-server --watch data.json --port 6000
  useEffect(()=> {
    fetch('http://localhost:8000/products')
    .then(res=> res.json())
    
    .then(data => setProducts(data) )
  },[])

  useEffect(()=> {
      products.map((product) => {
        const {category} = product
        if(categories.indexOf(category) === -1){
          setCategories(oldarray => [...oldarray, category])
        }
      })
  },[products])
  
  

  return (
    <>
    <section className={styles.section}>
      <div className={styles.text_side}>
        <h2>Vaatetori</h2>
        <p>Meneville ihmisille</p>
      </div>
      <div className={styles.image_side}>
        <img src={Model} alt="Mallin kuva" />
      </div>
    </section>
    
    <div>
    {categories.map((cat, idx)=> {
      return <p>{cat}</p>     
})}    
<div>{products.map((product) => {
    return <p>{product.name}</p>
})}
    </div>
   
</div>
    </>
  )
}

export default Kauppa