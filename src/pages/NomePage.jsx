import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewJobs from '../components/ViewJobs'

const HomePage = () => {
    return (
        <>
            <Hero title='Test Title' subtitle='this is a subtitle' />
            <HomeCards />
            <JobListings isHome={true}/>
            <ViewJobs />
        </>
    )
}

export default HomePage