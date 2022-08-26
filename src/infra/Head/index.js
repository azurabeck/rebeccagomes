import NextHead from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'

function Head(props) {
  return (
    <NextHead>
        <title>
            {props.title}
        </title>
    </NextHead>
  )
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Head
