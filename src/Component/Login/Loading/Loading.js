import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Spinner style={{ height: '40px' }} className='d-flex justify-content-center align-items-center mx-auto mt-5' animation="border" variant="primary" />
        </div>
    );
};

export default Loading;