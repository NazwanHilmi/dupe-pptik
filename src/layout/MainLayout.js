import React from 'react'
import Footer from '../components/homepage/footer/Footer'
import Header from '../components/homepage/header/Header'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout
