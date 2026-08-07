import React from 'react'
import FounderSection from '../components/sections/about/FounderSection'
import StorySection from '../components/sections/about/StorySection'
import MissionVIssion from '../components/sections/about/MissionVIssion'
import WhatWeDo from '../components/sections/about/WhatWeDo'
import StatsSection from '../components/sections/about/StatsSection'
import CommitmentSection from '../components/sections/about/CommitmentSection'

const About = () => {
  return (
    <div>
      <FounderSection />
      <StorySection />
      <MissionVIssion />
      <WhatWeDo />
      <StatsSection />
      <CommitmentSection />
    </div>
  )
}

export default About