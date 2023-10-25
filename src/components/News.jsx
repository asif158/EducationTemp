import './News.css'
import Left from '/svg/sponsors/left.svg'
import Right from '/svg/sponsors/right.svg'
import Palette from '/svg/palette.svg'

function News() {
  return (
    <div className="news">
      <img src={Palette} alt="palette-logo" className="palette" />
      <div className="news-heading">
        <h2>About latest tips,news and course</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices
        </p>
      </div>
      <div className="newsletters">
        <button className="left">
          <img src={Left} alt="left-button" className="left" />
        </button>
        <div className="news-container">
          <div className="news1">
            <img src="/images/news/1.png" alt="news-1-image" />
            <h4>
              5 Graphic Design Skills That Will Strengthen Your Creativity
            </h4>
            <p>Apr 9, 2020</p>
          </div>
          <div className="news3">
            <img src="/images/news/3.png" alt="news-3-image" />
            <h4>
              5 Graphic Design Skills That Will Strengthen Your Creativity
            </h4>
            <p>Apr 9, 2020</p>
          </div>
          <div className="news2">
            <img src="/images/news/2.png" alt="news-2-image" />
            <h4>
              5 Graphic Design Skills That Will Strengthen Your Creativity
            </h4>
            <p>Apr 9, 2020</p>
          </div>
        </div>
        <button className="right">
          <img src={Right} alt="right-button" className="right" />
        </button>
      </div>
    </div>
  )
}

export default News
