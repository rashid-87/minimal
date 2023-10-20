import ServisCard from './ServisCard'
import imgcard from './servisImg/server.png'
import imagesard from './servisImg/server1.png'
import './services.scss'

const Services = () => {
  return (
    <div className='services'>
      <div className="container">
        <h2 className="services__title">services</h2>
        <h3 className="services__subtitle">This is some text inside of a div block.</h3>
        <div className="services__row">
          <ServisCard images={imgcard} title='SERVICES one' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.' btn='Learn more'/>
          <ServisCard images={imagesard} title='SERVICES one' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.' btn='Learn more'/>
        </div>
      </div>
    </div>
  )
}

export default Services

