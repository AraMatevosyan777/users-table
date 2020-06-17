import React from 'react';
import load from './loader.svg';

const Preloader = () => {
    const style = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0'

    }
  return (
    <div style={style}>
      <img src={load} alt=""/>
    </div>
  )
}

export default Preloader
