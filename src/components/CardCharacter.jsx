import photo from '../images/default.jpg'
import PropTypes from 'prop-types';
import witch from '../images/maga.jpg'
import '../styles/layout/card.scss';

function CardCharacter({char}) {

    const renderImage = (char) => {
      if (char.image === '' && char.gender === 'male'){
        return photo
      } else if (char.image === '' && char.gender === 'female'){
        return witch
      } else {
        return char.image
      }
    }

  return (
    <article className='article'>
        
        <img src={renderImage(char)} alt={`imagen de ${char.name}`} className='article__img'/>
        <h3 className='article__title'>{char.name}</h3>
        <p className='article__text'>{char.species}</p>
        <p className='article__text'>{char.house}</p>

    </article>
  )
}

CardCharacter.propTypes = {
  char: PropTypes.object
}

export default CardCharacter