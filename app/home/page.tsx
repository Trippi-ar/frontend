'use client'

import React from 'react';
import Navbar from '../../components/Navbar';
import RelevantActivities from "@/components/RelevantActivities";
import ListOfActivities from "../../components/ListOfActivities";
import Footer from "../../components/Footer";


const Home = () => {


    return (
        <div className="antialiased tracking-wider mx-auto" style={{ maxWidth: '1400px' , minWidth: '1024px'}}>
            <Navbar isSticky={true} />
            <ListOfActivities />
            <Footer />
        </div>
    );
};

export default Home;