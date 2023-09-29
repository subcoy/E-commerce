import React from 'react';
import '../style/index.css'
import { Link } from 'react-router-dom';
export const BestProducts = ({product}) => {

    const value = product.rating.rate      
   
    return (
            <>
            <div>
                
            {value>=4?
                <>
                    <div className='Bproducts'>                                 
                        
                            <div className='Bproduct'> 
                                    <Link to ='/products' >                  
                                     <img  src={`${product.image}` } alt={`${product.description}` } /> 
                                    </Link> 
                                    <h1>{product.title}</h1>
                                    <p>Category={product.category} $</p>
                                    <p>Rating= {product.rating.rate}</p>
                                    <box-icon name="star" fill="blue"></box-icon>
                                    <p>Count= {product.rating.count}</p>
                                    <p className='price'>Price=${product.price}</p>
                            </div>
                        
                    </div>
                </>
            : ""}
                
            </div>

            </>
    );
}


