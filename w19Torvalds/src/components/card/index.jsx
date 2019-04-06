import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({
  handleClick,
  flipped,
  id,
  height,
  type,
  width,
  disabled,
  solved,
  rot,
}) {
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      style={{
        width,
        height,
        transform: "rotate(" + rot + "deg)"
      }}
      onClick={() => disabled ? null : handleClick(id)}
    >
      <div className='flipper'>
        <img
          alt='card'
          className={flipped ? 'front' : 'back'}
          src={flipped || solved ? `/img/${type}.jpg` : '/img/Back.jpg'}
          style={{
            width,
            height
          }}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  disabled : PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  rot: PropTypes.number.isRequired,
};
