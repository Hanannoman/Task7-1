
import { SlBasket } from 'react-icons/sl'
import FeaturedNews from '../../components/FeaturedNews/FeaturedNews'
import HeroHome from '../../components/HeroHome/HeroHome'
import HomeMain from '../../components/HomeMain/HomeMain'
import Navbar from '../../components/Navbar/Navbar'
import OurAwesom from '../../components/OurAwesom/OurAwesom'
import OurLatest from '../../components/OurLatest/OurLatest'
import './Home.css'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <div>
   
<Navbar z={false} ic={<SlBasket />}/>
     <HeroHome />
     <HomeMain />
   <OurAwesom />
   <OurLatest />
   <FeaturedNews/>
   <Footer />
    </div>
  )
}
