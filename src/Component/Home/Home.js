import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
import banner from '../../images/banner.png'
const Home = () => {
    return (
        <div>
            <div className='my-banner'>
                <div className='banner-content'>
                    <h1 className='p-5'>Best food  waiting for your belly</h1>
                    <input className='  w-25 border-0 pe-3' type="text" name="" id="" /> <button className='border-0 bg-danger text-white fw-bold'>Search</button>
                </div>
            </div>
            <div className='mt-3' >
                <Link className='text-decoration-none text-danger fw-bold m-5 ' to='breakfast'>Breakfast</Link>
                <Link className='text-decoration-none text-danger fw-bold m-5' to='lunch'>Lunch</Link>
                <Link className='text-decoration-none text-danger fw-bold m-5' to='dinner'>Dinner</Link>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;