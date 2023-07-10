import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Announce />
            <Navbar />
            <div className='px-0 md:px-10 '>
                <Slider />
                <Categories />
                <Products />
                <Newsletter/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home