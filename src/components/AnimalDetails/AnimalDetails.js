import React from 'react'
import '../AnimalDetails/AnimalDetails.css'
import PropTypes from 'prop-types'


function convertFood(food) {
    switch (food) {
        case 'insects':
            return '🐛';

        case 'meat':
            return '🥩';

        case 'plants':
            return '🌱';

        case 'fish':
            return '🐟';

        case 'eucalyptus leaves':
            return '🌿';

        case 'shrimp':
            return '🦐'

        default:
            return '';
    };
};

const AnimalDetails = ({ diet, scientificName }) => {
    return (
        <div className='details'>
            <h3>Details:</h3>
            <div><strong>Scientific Name</strong>: {scientificName}</div>
            <br></br>
            <div>
                <strong>Diet: </strong> {diet.map(food => convertFood(food)).join(' ')}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired
}

export default AnimalDetails