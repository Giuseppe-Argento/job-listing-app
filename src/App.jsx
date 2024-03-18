import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewJobs from './components/ViewJobs'


function App() {
  return (
    <>
      <Navbar />
      <Hero title='Test Title' subtitle='this is a subtitle' />
      <HomeCards />
      <JobListings />
      <ViewJobs />
    </>

  )
}

export default App
