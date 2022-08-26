import NextHead from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'

function Head(props) {
  return (
    <NextHead>
        <title> {props.title} </title>        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    </NextHead>
  )
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Head
