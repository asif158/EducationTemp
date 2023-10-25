import './FeaturedCourses.css'
import Ruler from '/svg/featured/Ruler.svg'
import Compass from '/svg/featured/Compass.svg'
import Star from '/svg/featured/Star.svg'

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Motion Graphics: Create a Nice Typography Animation',
      image: 'hacker.png',
    },
    {
      id: 2,
      title: 'Motion Graphics: Create a Nice Typography Animation',
      image: 'ai.png',
    },
    {
      id: 3,
      title: 'Motion Graphics: Create a Nice Typography Animation',
      image: 'cloud.png',
    },
    {
      id: 4,
      title: 'Motion Graphics: Create a Nice Typography Animation',
      image: 'tech.png',
    },
    {
      id: 5,
      title: 'Motion Graphics: Create a Nice Typography Animation',
      image: 'orange.png',
    },
    {
      id: 6,
      title: 'Motion Graphics: Create a Nice Typography Animation',
      image: 'walk.png',
    },
  ]

  return (
    <div className="featured">
      <div className="featured-heading">
        <img src={Ruler} alt="ruler" className="ruler" />
        <h5 className="h5-featured">Join Dominie At Bes</h5>
        <h2 className="h2-featured">Featured Courses</h2>
      </div>
      <div className="featured-courses">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={`images/featured/${course.image}`} alt={course.title} />
            <div className="circle">$36</div>
            <div className="content">
              <div className="heading">Web Development</div>
              <div className="course-title">{course.title}</div>
              <div className="stats">
                <p>5,957 students</p>
                <p>01h 49m</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="learn">Learn More</button>
      <img src={Star} alt="star" className="star" />
      <img src={Compass} alt="compass" className="compass" />
    </div>
  )
}

export default FeaturedCourses
