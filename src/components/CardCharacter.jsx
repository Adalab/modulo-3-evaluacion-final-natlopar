import photo from '../images/default.jpg';
import PropTypes from 'prop-types';
import witch from '../images/maga.jpg';
import '../styles/layout/card.scss';

function CardCharacter({ char }) {
  const renderImage = (char) => {
    if (char.image === '' && char.gender === 'male') {
      return photo;
    } else if (char.image === '' && char.gender === 'female') {
      return witch;
    } else {
      return char.image;
    }
  };

  return (
    <article className="article">
      <img
        src={renderImage(char)}
        alt={`imagen de ${char.name}`}
        className="article__img"
      />
      <div className="article__text">
        <h3 className="article__text--title">{char.name.toUpperCase()}</h3>
        <p>{char.species.toUpperCase()}</p>
        <p>{char.house}</p>
      </div>
    </article>
  );
}

CardCharacter.propTypes = {
  char: PropTypes.object,
};

export default CardCharacter;
