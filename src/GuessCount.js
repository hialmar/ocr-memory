import React from 'react'
import PropTypes from 'prop-types'

import './GuessCount.css'

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.defaultProps = {
  guesses: 0,
}

// La fonction GuessCount ici…

GuessCount.propTypes = {
  guesses: PropTypes.number.isRequired,
}
export default GuessCount
