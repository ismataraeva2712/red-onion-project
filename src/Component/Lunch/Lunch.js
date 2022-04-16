import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFood from '../Hooks/useFood';
import LunchItem from '../LunchItem/LunchItem';



const Lunch = () => {
    const [food, setFood] = useFood()
    const lunch = food.slice(6, 12)
    const navigate = useNavigate()
    return (
        <div>
            <h2 className='mt-3'>Lunch Item</h2>

            <Container >
                <Row>
                    {
                        lunch.map(item => <LunchItem
                            key={item.id}
                            item={item}
                        ></LunchItem>)
                    }
                </Row>

            </Container>
            <button className='btn-danger border-0 px-5 py-2 fw-bold' onClick={() => navigate('/details')}>details</button>
        </div >
    );
};

export default Lunch;