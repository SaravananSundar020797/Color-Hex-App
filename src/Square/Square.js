import React from 'react'
import './Square.css'

const Square = ({colorValue,hexValue,darkText}) => {
  return (
    <main className='square'>
      <div className = 'squareBox' style = {{background:colorValue,color:(darkText) ? '#000' : '#fff' }}>
        <div className='squareContent'>
        <p className=''>{colorValue ? colorValue : "EmptyValue"}</p>
        <p className=''>{hexValue ? hexValue : null}</p>
        </div>
      </div>
    </main>
  )
}

export default Square