
import Faq from '../Faq/Faq'
import Services from '../services/Services'
import Hero from './Hero'
import Marketting from './Marketting'

const Home = () => {
  return (
    <>
    <div className="w-full">
    {/* //hero section */}
    <Hero/>
  <hr/>

    {/* Message about social media */}
    
  
 
 

    <Marketting className="mt-4"/>
    <Services/>
    <Faq/>
    </div>

    </>
  )
}

export default Home
