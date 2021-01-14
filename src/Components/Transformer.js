import React from 'react';

function Transformer(props) {
  
  return (
    props.content.map(transformer => (
      <img
        className = 'transformer'
        src = {transformer.url}
        alt = {transformer.name}
        />
    ))
  )
}

export default Transformer;
