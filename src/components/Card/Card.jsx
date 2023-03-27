import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
      const URL = `https://openapi.programming-hero.com/api/ai/tools`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setData(data.data.tools));
  },[])
    return (
        <div className='grid grid-cols-3 m-24 gap-8'>
            {
                data.map(value => {
                    // console.log(value);
                    return <SingleData
                        key={value.id}
                        value={value}
                    />
                })
            }
        </div>
    );
};

export default Card;