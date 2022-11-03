import React, {  useEffect, useState } from 'react'

import styles from '../styles/Shop.module.css'


//images
import Model from '../public//img/model.png'
import Btn from '../components/Btn'

const Kauppa = () => {
  //databasesta tuleva tuotelista
  const [products, setProducts] = useState([])
  //ketegoriat, jotka muutetaan valikko napeiksi
  const [categories, setCategories] = useState([])
  //mitkä tuotteet näytetään
  const[shown, setShown] = useState('Kaikki')

  //json server käytässä json-server --watch data.json --port 8000
  useEffect(()=> {
    fetch('http://localhost:8000/products')
    .then(res=> res.json())
    
    .then(data => setProducts(data) )
  },[])


  
  useEffect(()=> {
      let tempArray =[]
      products.map((product) => {
       
        const {category} = product
        if(!tempArray.includes(category)){
          tempArray.push(category)
        }
        
        setCategories(tempArray)
        
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
    <Btn text='Kaikki'/>
    {categories.map((cat, idx)=> {
      return <Btn key={idx} text={cat}/>
})}    
 </div>
<div>{products.map((product) => {
    return <p>{product.name}</p>
})}
   
   
</div>
    </>
  )
}

export default Kauppa