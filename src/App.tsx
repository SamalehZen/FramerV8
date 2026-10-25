import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { TrustBar } from './components/sections/TrustBar'
import { About } from './components/sections/About'
import { Stats } from './components/sections/Stats'
import { Properties } from './components/sections/Properties'
import { Services } from './components/sections/Services'
import { Amenities } from './components/sections/Amenities'
import { HowItWorks } from './components/sections/HowItWorks'
import { VideoSection } from './components/sections/VideoSection'
import { Gallery } from './components/sections/Gallery'
import { Testimonials } from './components/sections/Testimonials'
import { Blog } from './components/sections/Blog'
import { FAQ } from './components/sections/FAQ'
import { CTA } from './components/sections/CTA'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2.5 focus:font-sans focus:text-[14px] focus:font-medium focus:text-white focus:shadow-navy focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Stats />
        <Properties />
        <Services />
        <Amenities />
        <HowItWorks />
        <VideoSection />
        <Gallery />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
