import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dinner = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2>dinner</h2>
            <button className='btn-danger border-0 px-5 py-2 fw-bold' onClick={() => navigate('/details')}>details</button>
        </div>
    );
};

export default Dinner;