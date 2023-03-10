import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './assets/Card/Card'
import Form from './assets/Form/Form'

function App() {

  const [user, setUser] = useState(
    {
      name: "name",
      pet: "pet",
      state: false
    }
  )

  const [validate, setValidate] = useState(
    {
      spaces: false,
      minCaracterName: false,
      minCaracterPet: false,
      okValidate: false,
    }
  )

  return (
    <>
    
    {!validate.okValidate &&<Form 
    user = {user}
    name = {user.name} 
    pet = {user.pet} 
    state = {user.state} 
    setUser = {setUser} 
    spaces={validate.spaces} 
    minCaracterName={validate.minCaracterName} 
    minCaracterPet={validate.minCaracterPet} 
    okValidate={validate.okValidate}
    setValidate = {setValidate} />}

    {validate.okValidate && <Card name = {user.name} pet = {user.pet}/>} 



    </>

  )
}

export default App
