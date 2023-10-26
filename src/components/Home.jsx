import './Home.css'
import Globe from '/svg/Globe.svg'
import Arrow from '/svg/Arrow.svg'
import Pencil from '/svg/Pencil.svg'
import Atom from '/svg/Atom.svg'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Good coaching is good teaching</h1>
      <p className="motto">
        In a coaching role, you ask the questions and rely more on your staff,
        who become the experts, to provide the information.
      </p>
      <img src={Globe} alt="logo" className="globe" />
      <img src={Arrow} alt="logo" className="arrow" />
      <img src={Pencil} alt="logo" className="pencil" />
      <div className="join-as">
        <button>Join as Student</button>
        <button>Join as Instructor</button>
      </div>
      <img src="images/pencil.png" alt="" className="home-image" />
      <div className="home-image-background"></div>
      <div className="home-image-container"></div>
      <img src={Atom} alt="logo" className="atom" />
    </div>
  )
}

export default Home
