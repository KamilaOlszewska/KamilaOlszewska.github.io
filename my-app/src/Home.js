import React from 'react';
import HeroSection from "./hero-section";
import AboutPage from "./about-page";
import Features from "./features";
import Form from "./form"
import Footer from "./footer";
import "./css/index.css"

const Home = () => {
    return (
        <>
            <HeroSection/>
            <AboutPage/>
            <Features/>
            <Form/>
            <Footer/>
    </>
    );
};

export default Home;