'use client'
import GallerySection from '@/components/GalleryImages/GallerySection'
import LoopSection from '@/components/LoopSection/LoopSection'
import ReviewSection from '@/components/Reviewslider/ReviewSection'
import BestAppliances from '@/components/appliances_Deals/BestAppliances'
import HeroContainer from '@/components/heroContainer/HeroContainer'
import HowItWorks from '@/components/howitworks/HowItWorks'
import LogoBar from '@/components/logoBar/LogoBar'
import MapSection from '@/components/mapForm/MapSection'
import NewsLetterSection from '@/components/newletter/NewsLetterSection'
import ShopByAppliances from '@/components/shopByAppliances/ShopByAppliances'
import SatisfiedSection from '@/components/staisfiedCustomer/SatisfiedSection'
import TourSection from '@/components/tourSection/TourSection'
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
    <MapSection/>
    {/* <RatingProductSection/> */}
    <TourSection/>
    <GallerySection/>
    <SatisfiedSection/>
    <NewsLetterSection/>
    </>
  )
}
 