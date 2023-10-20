
const ServisCard = ({images, title, text, btn}) => {
  return (
    <div className="services__wrapp">
      <img className='services__img' src={images} alt="img-server" />
      <h4 className="services__text">{title}</h4>
      <p className="services__desc">{text}</p>
      <button className='services__btn' type="button">{btn}</button>
  </div>
  )
}

export default ServisCard
