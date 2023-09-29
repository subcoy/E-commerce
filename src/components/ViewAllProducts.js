import React, {useEffect, useState} from 'react';

import '../style/index.css'
import ProductCard from './ProductCard.js';

export const ViewAllProducts = () => {
 const[products,setProducts] =useState([])
 const [filPrduct,setFillProduct]= useState([0]);

 
    useEffect(() => {
        const getAllData = async () =>{
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const results = await response.json()
            setProducts(results)
            sortByName();
            } catch (err){
            console.error(err)
            }
        }
    getAllData()
    },[])

    console.log("products",products);
    console.log("setproducts",setProducts);
    /*----------------sort ---------------------------------------- */
    const sortByName=()=>{
        setFillProduct([...products].sort((productA,productB)=>{
            return productA.title> productB.title? 1: -1
        }))
        
    }

    const sortByPrice=()=>{
        setFillProduct([...products].sort((productA,productB)=>{
            return productA.price> productB.price? 1: -1
        }))
    }

    const filterbyCategory =(category)=>{
        setFillProduct([...products].filter((product)=>{
            return product.category=== category
        }))
    }

    const FilterCatAProd=()=>{
        const categories =new Set()
        products.forEach((product) =>{
            categories.add(product.category)
        })
        return Array.from(categories);

    }

    const categories=FilterCatAProd() || []
    /*--------------------------------------------------------------*/
    console.log("Filproducts.length",filPrduct.length);
    if(filPrduct.length===0){
        
    }
    console.log("products",products);
    console.log("setproducts",setProducts);
    console.log("Filproducts",filPrduct);
    console.log("setproducts",setFillProduct);
    
    return(
            <>
            <div className= "sort-btn"> 
                Filter:
                <button className='btn1'  onClick={() => {sortByName()}}>Sort by name </button>
                <button className='btn2'  onClick={() => {sortByPrice()}}>Sort by price </button>
            </div>
            <div className='btn-category'>    
                Category:
                <select onChange ={(e) => {filterbyCategory(e.target.value)}}>
                    {categories.length && categories.map((el, i) =>{
                        return (<option key={i} value={el}> {el} </option>)
                    })}
                </select>
            </div>

            <div className='panelProducts'>            
     { /**------------Conditional when Array is empty--------------------- */}
                { filPrduct.length===0 ? 
                
                    (!!products.length && products.map((el,id) =>{
                    return( <ProductCard key={id} product={el} /> ) })) :

                    ( !!products.length && filPrduct.map((el,id) =>{
                        return(<ProductCard key={id} product={el} /> ) }))

                }
     {/*---------------------------------------------------------------------- */}       
             
            </div>


            </>
            )
}  