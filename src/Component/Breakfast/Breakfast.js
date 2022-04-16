import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import BreakfastItem from '../BreakfastItem/BreakfastItem';


const Breakfast = () => {
    const navigate = useNavigate()
    return (<div>
        <h2>Breakfast</h2>
        <button className='btn-danger border-0 px-5 py-2 fw-bold' onClick={() => navigate('/details')}>details</button>
    </div>


    );
};

export default Breakfast;