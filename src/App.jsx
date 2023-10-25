import FeaturedCourses from './components/FeaturedCourses'
import Footer from './components/Footer'
import Home from './components/Home'
import LearnMore from './components/LearnMore'
import Navbar from './components/Navbar'
import News from './components/News'
import Sponsors from './components/Sponsors'
import Testimonials from './components/Testimonials'
import TopCategories from './components/TopCategories'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <Sponsors />
        <FeaturedCourses />
        <TopCategories />
        <Testimonials />
        <News />
        <LearnMore />
      </main>
      <Footer />
    </>
  )
}

export default App
