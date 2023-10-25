import './Footer.css'
import Mail from '/svg/footer/mail.svg'
import Address from '/svg/footer/address.svg'
import Phone from '/svg/footer/phone.svg'
import Facebook from '/svg/footer/facebook.svg'
import Twitter from '/svg/footer/twitter.svg'
import Instagram from '/svg/footer/instagram.svg'
import Behance from '/svg/footer/behance.svg'
import Dribble from '/svg/footer/dribble.svg'
import Cissors from '/svg/footer/kainchi.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="education">
          <h2 className='h2-footer'>
            <b>Education</b>Temp
          </h2>
          <p className="education-text">
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul className="links-grid">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Course</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="contacts">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <a href="#">
              <img src={Phone} alt="logo" className="phone" />
              (209) 555-0104
            </a>
            <a href="#">
              <img src={Address} alt="logo" className="address" />
              2715 Ash Dr. San Jose, South Dakota 83475
            </a>
            <a href="#">
              <img src={Mail} alt="logo" className="mail" />
              michelle.rivera@example.com
            </a>
          </div>
        </div>
      </div>
      <hr />
      <img src={Cissors} alt="cissors" className="cissors" />
      <div className="social-media">
        <p>Copyright {new Date().getFullYear()} | All Rights Reserved</p>
        <div className="social-icons">
          <a href="#">
            <img src={Facebook} alt="facebook" className="facebook" />
          </a>
          <a href="#">
            <img src={Twitter} alt="twitter" className="twitter" />
          </a>
          <a href="#">
            <img src={Instagram} alt="instagram" className="instagram" />
          </a>
          <a href="#">
            <img src={Behance} alt="behance" className="behance" />
          </a>
          <a href="#">
            <img src={Dribble} alt="dribble" className="dribble" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
