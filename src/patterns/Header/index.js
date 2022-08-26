import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <header>{props.children}</header>
  )
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Header