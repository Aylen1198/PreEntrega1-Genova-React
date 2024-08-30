import React from 'react'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'




const App = () => {
  return (
    <>
      <NavBar/>

      <ItemListContainer greeting="Hot selling"/>
    </>
  )
}

export default App