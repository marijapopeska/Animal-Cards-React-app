import React from 'react'
import '../AnimalDetails/AnimalDetails.css'
import PropTypes from 'prop-types'

const AnimalDetails = ({ diet, scientificName }) => {
    return (
        <div className='details'>
            <h3>Details:</h3>
            <div><strong>Scientific Name</strong>: {scientificName}</div>
            <br></br>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired
}

export default AnimalDetails