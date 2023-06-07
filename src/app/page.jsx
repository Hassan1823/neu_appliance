import LoopSection from '@/components/LoopSection/LoopSection'
import ReviewSection from '@/components/Reviewslider/ReviewSection'
import SwiperSlides from '@/components/SwiperSlides'
import BestAppliances from '@/components/appliances_Deals/BestAppliances'
import HeroContainer from '@/components/heroContainer/HeroContainer'
import HowItWorks from '@/components/howitworks/HowItWorks'
import LogoBar from '@/components/logoBar/LogoBar'
import ShopByAppliances from '@/components/shopByAppliances/ShopByAppliances'
import WhatWeSell from '@/components/whatwesell/WhatWeSell'
export default function Home() {
  return (
    <>
    <HeroContainer />
    <LogoBar />
    <WhatWeSell />
    <HowItWorks />
    <BestAppliances />
    <ReviewSection />
    <LoopSection />
    <ShopByAppliances/>
    <SwiperSlides />
    </>
  )
}
