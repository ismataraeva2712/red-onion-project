import React from 'react';
import { Button, Card } from 'react-bootstrap';

const DinnerItem = ({ item }) => {
    const { name, description, picture, price } = item
    return (
        <div className='  g-5 col-12 col-md-6 col-lg-4 mx-auto '>

            <Card >
                <Card.Img variant="top" style={{ height: '200px', width: '80%', marginTop: "20px", marginLeft: "30px" }} src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price : ${price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DinnerItem;