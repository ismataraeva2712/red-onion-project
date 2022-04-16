import React from 'react';

import { useEffect, useState } from 'react';

const useFood = () => {
    const [food, setFood] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ismataraeva2712/red-onion-project/main/public/data.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return [food, setFood]
};

export default useFood;