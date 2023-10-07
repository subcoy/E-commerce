import React from 'react';
import '../style/index.css'
import { Link } from 'react-router-dom';
export const BestProducts = ({product}) => {

    const value = product.rating.rate
   
  const smallTitle = product.title.length<15 ? product.title: product.title.slice(0,15)+ "...";
   console.log(smallTitle);
   
   

    return (
            
            <div>
                
                    <div className='Bproducts'>                                 
                        
                            <div className='Bproduct'> 
                             <h1>{smallTitle}</h1>
                                    <Link to ='/products' >                  
                                     <img  src={`${product.image}` } alt={`${product.description}` } /> 
                                    </Link> 
                                    
                                    <p>Category={product.category} $</p>
                                    <p>Rating= {product.rating.rate}  <box-icon name="star" fill="yellow"></box-icon> </p>
                                   
                                    <p>Count= {product.rating.count}</p>
                                    <h2 className='price'>Price=${product.price}</h2>
                            </div>
                        
                    </div>
                  
          
                
            </div>

            
    );
}


