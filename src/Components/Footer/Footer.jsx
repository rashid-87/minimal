import './footer.scss';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaPinterestP} from 'react-icons/fa';
import {TfiGoogle} from 'react-icons/tfi';
import {SiWebtrees} from 'react-icons/si';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__row">
            <h3 className="footer__title">about velocity</h3>
            <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          </div>
          <div className="footer__row">
            <h3 className="footer__title">useful links</h3>
            <p className="footer__text">Phasellus gravida semper nisi Suspendisse nisl elit Dellentesque habitant morbi Etiam sollicitudin ipsum</p>
          </div>
          <div className="footer__row">
            <h3 className="footer__title">social</h3>
            <div className="footer__info">
              <div className="footer__icons">
                <BsTwitter />
                <h4 className="footer__desc">Twitter</h4>
              </div>
              <div className="footer__icons">
                <FaFacebookSquare />
                <h4 className="footer__desc">Facebook</h4>
              </div>
              <div className="footer__icons">
                <FaPinterestP />
                <h4 className="footer__desc">Pinterest</h4>
              </div>
              <div className="footer__icons">
                <TfiGoogle />
                <h4 className="footer__desc">Google</h4>
              </div>
              <div className="footer__icons">
                <SiWebtrees />
                <h4 className="footer__desc">Webflow</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <h5 className="footer__infotext">Copyright Velocity Inc. Made in Webflow.</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
