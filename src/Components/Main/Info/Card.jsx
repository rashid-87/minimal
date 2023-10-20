import React from 'react'

const Card = ({img, test, desc}) => {
  return (
    <div className="info__items">
      <img className='info__images' src={img} alt="img-card" />
      <h4 className="info__text">{test}</h4>
      <p className="info__desc">{desc}</p>
  </div>
  )
}

export default Card
