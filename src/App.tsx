import React from 'react'
import Section1 from './components/Section1/section1.tsx'
import Section2 from './components/Section2/section2.tsx'
import Section3 from './components/Section3/section3.tsx'

const App: React.FC = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default App