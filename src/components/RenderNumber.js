import React from 'react'

export const RenderNumber = () => {
  let hours = [];
  for (let i = 1; i < 13; i += 1) {hours.push(i);}
  return (
    <ul className='clock_ul'>
      {hours.map((el, index) => {
        return(<li key={index} className={`li li${el}`}>{el}</li>)
      })}
    </ul>
  )
}

