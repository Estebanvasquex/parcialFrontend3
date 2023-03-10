import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {

  return <>
  <div className={styles.containerCard}> 
  <div className={styles.containerCardBackground}></div>
  <img src="" alt="" />
  <h2 className={styles.containerCardH}  >hola {props.name}</h2>
  <h3 className={styles.containerCardH}  >{props.pet}</h3>
  </div>
  
  </>

          
}
