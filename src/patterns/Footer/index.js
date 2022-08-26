import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <footer>{props.children}</footer>
  )
}

Footer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Footer