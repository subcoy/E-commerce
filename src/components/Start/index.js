import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FrontPage from "../../images/frontpage3.jpg"
import '../../style/index.css'
import{BestProducts} from '../BestProducts';


export const Start = () => {
    const[products,setProducts] =useState([])

    useEffect(() => {
        const getAllData = async () =>{
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const results = await response.json()
            setProducts(results)
            } catch (err){
            console.error(err)
            }
        }
    getAllData()
    },[])

    return (
        <>
                <div className='start'>                  
                                     
                    <img src={FrontPage} alt="start"></img>
                    <h1 >Best Sellers</h1> 
                </div>

                <div className='container-products'>
                    
                    {products.filter((product)=> product.rating.rate>=4).map((el,id)=>{
                     return<BestProducts key={id} product={el} /> 
                    })}


                </div>

        </>

    );
}

