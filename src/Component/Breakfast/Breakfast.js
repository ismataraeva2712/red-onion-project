import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreakfastItem from '../BreakfastItem/BreakfastItem';



const Breakfast = () => {

    const [food, setFood] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])


    const navigate = useNavigate()
    return (<div>
        <h2>Breakfast {food.length}</h2>

        {
            food.map(item => <BreakfastItem
                key={item.id}
                item={item}
            ></BreakfastItem>)
        }






        <button className='btn-danger border-0 px-5 py-2 fw-bold' onClick={() => navigate('/details')}>details</button>
    </div>


    );
};

export default Breakfast;