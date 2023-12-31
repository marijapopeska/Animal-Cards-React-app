import React from 'react'
import data from '../App/data'
import AnimalCard from '../AnimalCard/AnimalCard'



const App = () => {
  return (
    <div className='wrapper'>
      <h1>Animals</h1>
      {data.map(animal => (
        <AnimalCard
          additional={animal.additional}
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          size={animal.size}
        />
      ))}
    </div>
  )
}

export default App