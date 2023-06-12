import React from 'react'
import '../AnimalCard/AnimalCard.css'
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';


const AnimalCard = ({ name, size, additional, ...props }) => {

  const additionalInfo = additional ? (
    <div>
      {Object.entries(additional).map(([key, value]) => {
        if (key === 'link') {
          return (
            <div>
              <strong>{key}:</strong>
              <div>
                <a
                  href={value}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {value}
                </a>
              </div>
            </div>
          )
        } else {
          return (
            <div key={key}>
              <strong>{key}:</strong>
              <div>{value}</div>
              <br></br>
            </div>
          )
        }
      })}
    </div>
  ) : 'No additional info';

  return (

    <div className='animal-wrapper'>
      
        <h2>{name}</h2>
        <h4>{size}kg</h4>
        <AnimalDetails
          {...props}
        />

        <h3>Additional information</h3>
        <div>{additionalInfo}</div>
      
    </div>


  )
}

AnimalCard.prototypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired

}


export default AnimalCard
