'use client'

import React from 'react';
import Navbar from '../components/Navbar';
import ActivityBar from "../components/ActivityBar";
import RelevantActivities from "@/app/components/RelevantActivities";
import ListOfActivities from "../components/ListOfActivities";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <div className="font-sans antialiased tracking-wider">
            <Navbar />
            <ActivityBar />
            <RelevantActivities />
            <ListOfActivities />
            <Footer />
        </div>
    );
};

export default Home;