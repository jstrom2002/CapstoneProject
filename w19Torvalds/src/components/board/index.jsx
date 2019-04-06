import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card'
import './styles.css'

export default function Board({ solved, disabled, dimension, cards, flipped, handleClick,cardRot,boardRot }) {
  return (
    <fieldset>
    <div
      style={{
        transform: "rotate(" + boardRot + "deg)"
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          width={dimension/ 4}
          height={dimension / 3}
          handleClick={handleClick}
          flipped={flipped.includes(card.id)}
          disabled={disabled || solved.includes(card.id)}
          solved={solved.includes(card.id)}
          rot={cardRot}
          {...card}
        />
      ))}
    </div>
    </fieldset>
  )
}

Board.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  cardRot: PropTypes.number.isRequired,
  boardRot: PropTypes.number.isRequired,
};
