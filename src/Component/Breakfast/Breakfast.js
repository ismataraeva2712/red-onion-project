import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreakfastItem from '../BreakfastItem/BreakfastItem';
import useFood from '../Hooks/useFood';



const Breakfast = () => {

    const [food, setFood] = useFood()
    const breakfast = food.slice(0, 6)


    const navigate = useNavigate()
    return (<div>
        <h2>Breakfast {food.length}</h2>

        <Container >
            <Row>
                {
                    breakfast.map(item => <BreakfastItem
                        key={item.id}
                        item={item}
                    ></BreakfastItem>)
                }
            </Row>

        </Container>





        <button className='btn-danger border-0 px-5 py-2 fw-bold' onClick={() => navigate('/details')}>details</button>
    </div>


    );
};

export default Breakfast;