import React from 'react';
import { add, multiply } from '../utilities/calculate';

const Shoes = () => {
    const first = 12;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first,second);
    return (
        <div>
           <h1>Welcome to shoes store</h1>
           <p>Result : {result}</p>
           <p>Sum : {sum}</p> 
        </div>
    );
};

export default Shoes;<h1>Welcome to shoes store</h1>