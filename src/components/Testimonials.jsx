import './Testimonials.css'
import Clip from '/svg/Clip.svg'

const Testimonials = () => {
  return (
    <div className="testimonial-outer">
      <div className="testimonials">
        <img src={Clip} alt="logo" className="clip" />
        <div className="testimonial-circle"></div>
        <div className="testimonial-left">
          <img
            src="images/testimonials/testimonial.png"
            alt="Testimonial image"
          />
        </div>
        <div className="testimonial-right">
          <h5 className="h5-test">Testimonials</h5>
          <h2>what our students say?</h2>
          <div className="testimonial-images">
            <img src="images/testimonials/img1.png" className="round-image" />
            <img src="images/testimonials/img2.png" className="round-image" />
            <img src="images/testimonials/img3.png" className="round-image" />
            <img src="images/testimonials/img4.png" className="round-image" />
            <img src="images/testimonials/img5.png" className="round-image" />
          </div>
          <div className="h5-name">
            <h5>Ramjan Ali Anik</h5>
            <a className='a-testimonial' href="">Bostsolf.co</a>
          </div>
          <p className='p-testimonials'>
            One ipsum dolor sit amet, elit, sed do eiusmod tempor ut labore et
            dolore magna aliqua. Quis ipsum ultrices gravida. Risus dolore magna
            aliqua. Quis ipsum ultrices gravida.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
