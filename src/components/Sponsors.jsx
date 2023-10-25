import './Sponsors.css'
import Hubspot from '/svg/sponsors/hubspot.svg'
import Gitlab from '/svg/sponsors/gitlab.svg'
import Loom from '/svg/sponsors/loom.svg'
import Livechat from '/svg/sponsors/livechat.svg'
import Left from '/svg/sponsors/left.svg'
import Right from '/svg/sponsors/right.svg'

function Sponsors() {
  return (
    <div className="sponsors">
      <button>
        <img src={Left} alt="left-button" className="left" />
      </button>
      <img src={Hubspot} alt="hubspot" className="hubspot" />
      <img src={Loom} alt="loom" className="loom" />
      <img src={Gitlab} alt="gitlab" className="gitlab" />
      <img src={Livechat} alt="livechat" className="livechat" />
      <button>
        <img src={Right} alt="right-button" className="right" />
      </button>
    </div>
  )
}

export default Sponsors
