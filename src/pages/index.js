import React, {useState} from 'react';
import { Router } from 'react-router';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
    return(
        <>
            <Sidebar />
            <Navbar />
        </>
    )
}

export default Home;