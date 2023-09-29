import React, { useContext, useState } from 'react';
import '../style/index.css'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { DataContext } from '../context/Dataprovider';

const ProductCard = ({product}) => {
    const { items, setItems, cart, setCart} = useContext(DataContext);
     const navigate = useNavigate();

    /*------------addCart----------------------------- */
    
    const addToCart = (prod) => {
   
    const CurrentItem= items.find((item)=> item.id === prod.id);
     if ( CurrentItem) {
            const newItems = [];
            items.forEach((item) => {
                if (item.id === prod.id) {
                    item.quantity += 1;
                }
                newItems.push(item);
            })
            setItems(newItems)
       }
        else{
            setItems([...items, {...prod, quantity:1 }]);
            }
    }
   
/*----------------------------View Details----------------*/
 const ViewProduct =(prod) =>{          
    const cart = [prod];
    setCart([...cart])
    console.log("description=",cart);
    navigate('/DetailsProduct');
}

/*--------------------------------------------*/
    return (
        <>
            <div className='products'>                                 
                <a href="#">
                    <div className='product'>  
                           
                            <img  src={`${product.image}` } alt={`${product.description}` } onClick={()=> ViewProduct(product)}/> 
                            
                    </div>
                </a>                   
                <div className='product_footer'>                     
                        <h1>{product.title}</h1>
                        <p>Category={product.category} $</p>
                        <p>Rating= {product.rating.rate}</p>
                        {
                            
                        }
                        <box-icon name="star" fill="blue"></box-icon>
                        <p>Count= {product.rating.count}</p>
                        <p className='price'>Price=${product.price}</p>
                </div>
                <div className='buttom'>
                        <buttom className="ADD" onClick={()=>addToCart(product)} >ADD to Cart </buttom>
                   
                </div>
           </div>
     </>

    );
}

export default ProductCard;
