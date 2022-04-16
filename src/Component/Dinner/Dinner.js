import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DinnerItem from '../DinnerItem/DinnerItem';
import useFood from '../Hooks/useFood';
const Dinner = () => {
    const [food, setFood] = useFood()
    const dinner = food.slice(12, 19)
    const navigate = useNavigate()

    return (
        <div>
            <h2>dinner</h2>
            <Container >
                <Row>
                    {
                        dinner.map(item => <DinnerItem
                            key={item.id}
                            item={item}
                        ></DinnerItem>)
                    }
                </Row>

            </Container>
            <button className='btn-danger border-0 px-5 py-2 fw-bold' onClick={() => navigate('/details')}>details</button>
        </div>
    );
};

export default Dinner;