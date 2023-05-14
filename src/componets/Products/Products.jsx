import React from 'react'
import { ImageCard } from '..'
import { imageData } from "../../data/index"


  const Products = () => {
    return (
    <div className='product-cont max-w'>
      <h1>Products</h1>
    <div className="product-row">
    {imageData.slice(0, 2).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription}/>
    ))}
    </div>

    <div className="product-row">
    {imageData.slice(2, 4).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription}/>
    ))}
    </div>

    <div className="product-row">
    {imageData.slice(4, 6).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription}/>
    ))}
    </div>
    </div>
    );
    };
    
    export default Products;