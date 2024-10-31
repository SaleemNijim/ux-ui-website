import React from 'react'
import './App.css'
import './index.css'
import { Brand, CTA, Navbar } from './Components'
import { Blog, Features, Footer, Header, Possiblitiy, WhatGPT } from './Containers'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT />
            <Features />
            <Possiblitiy />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
