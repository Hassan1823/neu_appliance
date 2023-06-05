import BestAppliances from '@/components/appliances_Deals/BestAppliances'
import HeroContainer from '@/components/heroContainer/HeroContainer'
import HowItWorks from '@/components/howitworks/HowItWorks'
import LogoBar from '@/components/logoBar/LogoBar'
import WhatWeSell from '@/components/whatwesell/WhatWeSell'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <HeroContainer />
    <LogoBar />
    <WhatWeSell />
    <HowItWorks />
    <BestAppliances />
    </>
  )
}
