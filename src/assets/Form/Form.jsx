import React, { useState } from 'react'
import Card from '../Card/Card'
import styles from './Form.module.css'

export default function Form(props) {
  

  const handleChange = (e, propiedad)=>{
    props.setUser({...props.user, [propiedad]: e.target.value})
    
  }


  const handleSubmit = (e)=>{
    let okValidateinputName = false;
    let okValidateinputPet = false;

    e.preventDefault();

    let sinEspcio = props.name.trim();
    
    let comparaEspacio = props.name === sinEspcio

    if(!comparaEspacio){
      props.setValidate({...props.validate, spaces: true})
    }else if(props.name.length < 3){
      props.setValidate({...props.validate, minCaracterName: true})
    }else{
      okValidateinputName = true;
      
    }
    
    if(props.pet.length >= 6){
      okValidateinputPet = true;
      
    }else{
      props.setValidate({...props.validate, minCaracterPet: true})

      
    }

    if(okValidateinputName === okValidateinputPet){
      
      props.setValidate({...props.validate, okValidate: true})

    }


  }

  return (
    <div className= {styles.container}>

      <h1>
        Queremos conocerte
      </h1>

      <form action="" className= {styles.containerForm} onSubmit = {handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input type="text"  className= {styles.containerFormInput} placeholder="Nombre" name="name" onChange ={ (e) => handleChange(e,"name")} />
        {props.spaces && <span>Debe eliminar espacios</span>} 
        {props.minCaracterName && <span>Minimo 3 carecteres</span>}
        <label htmlFor="">Mascota</label>
        <input type="text"  className= {styles.containerFormInput} placeholder="Mascota" name = "pet" onChange = { (e) => handleChange(e,"pet")} />
        {props.minCaracterPet && <span>Minimo 6 carecteres</span>}
        
        <button>Enviar</button>
      </form>

    </div>
  )
}
