'use client'

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SeachActivities from '@/components/SeachActivities'

function Activities() {

    return (
        <div className="antialiased tracking-wider mx-auto" style={{maxWidth: '1400px', minWidth: '1024px'}}>
            <Navbar isSticky={true}/>
            <SeachActivities />
            <Footer />
        </div>

    );
}

export default Activities;
