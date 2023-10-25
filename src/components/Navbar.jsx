import './Navbar.css'
import Cart from '/svg/navbar/cart.svg'
import Profile from '/svg/navbar/profile.svg'
import Search from '/svg/navbar/search.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="menu-icon">
          <h3>
            <b>Education</b>
            Temp
          </h3>
        </div>
        <div className={`nav-elements`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <img src={Cart} alt="cart" className="cart" />
          <img src={Profile} alt="profile" className="profile" />
          <img src={Search} alt="search" className="search" />
          <button className="login">Login</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
