import './LearnMore.css'
import Laptop from '/svg/Laptop.svg'

const LearnMore = () => {
  return (
    <div className="learn-more-container">
      <div className="left-column">
        <h5 className="h5-learn-more">Join Dominie At Best</h5>
        <h2>The number one factor in relevance drives out resistance.</h2>
        <p className="p-learn-more">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </p>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="right-column">
        <img src={Laptop} alt="logo" className="laptop" />
        <img src="/images/CupPodium.png" alt="Learn More" />
      </div>
      <div className="learnmore-circle"></div>
    </div>
  )
}

export default LearnMore
