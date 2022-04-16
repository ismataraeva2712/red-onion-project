import React from 'react';

import { useEffect, useState } from 'react';

const useFood = () => {
    const [food, setFood] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return [food, setFood]
};

export default useFood;