import Card from './Card';
import img from './infoImg/info.svg';
import img1 from './infoImg/info1.svg';
import img2 from './infoImg/info2.svg';
import './info.scss';

const Info = () => {
  return (
    <div className='info'>
      <div className="container">
        <h2 className="info__title">what we do</h2>
        <h3 className="info__subtitle">This is some text inside of a div block.</h3>
        <div className="info__card">
          <Card img={img} test='Graphic Design' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique'/>
          <Card img={img1} test='Awesome code' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius'/>
          <Card img={img2} test='free template' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique'/>
        </div>
      </div>
    </div>
  )
}

export default Info
