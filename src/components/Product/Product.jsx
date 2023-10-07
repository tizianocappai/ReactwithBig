import React from 'react';

export default function Product(props) {
    
    const {Title, Price, Description} = props;

    return (
        <article className="product">
            <h2>{Title}</h2>
            <p className="price">${Price}</p>
            <p>{Description}</p>
        </article>
    );
}