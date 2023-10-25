import './TopCategories.css'
import DM from '/svg/topcategories/DM.svg'
import GD from '/svg/topcategories/GD.svg'
import AH from '/svg/topcategories/AH.svg'
import PD from '/svg/topcategories/PD.svg'
import IT from '/svg/topcategories/IT.svg'
import WD from '/svg/topcategories/WD.svg'

const TopCategories = () => {
  const categoriesData = [
    {
      title: 'Digital Marketing',
      details: '25 Courses',
      logo_path: DM,
    },
    {
      title: 'Graphic Design',
      details: '85 Courses',
      logo_path: GD,
    },
    {
      title: 'Art & Humanities',
      details: '76 Courses',
      logo_path: AH,
    },
    {
      title: 'Personal Development',
      details: '22 Courses',
      logo_path: PD,
    },
    {
      title: 'IT and Software',
      details: '110 Courses',
      logo_path: IT,
    },
    {
      title: 'Web Development',
      details: '16 Courses',
      logo_path: WD,
    },
  ]

  return (
    <div className="top-categories">
      <h2 className="top-categories-heading">Top Categories</h2>
      <div className="category-cards">
        {categoriesData.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.logo_path} alt={category.logo_path} className={`${category.logo_path}`.split('/')[3].slice(0,2)} />
            <div className="texts">
              <h3>{category.title}</h3>
              <p className="details">{category.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCategories
