import React from 'react'
import Header from "./Header";
import   "./mystyle.css"
import MainContent from "./MainContent"
import Footer from './Footer'

export const MyApp = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            
        </div>
    )
}
export default MyApp