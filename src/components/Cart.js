import React, { useContext } from 'react';
import { DataContext } from '../context/Dataprovider'; 
import { Link, useNavigate } from 'react-router-dom';


export const Cart = (product) => {

    const {setItems, items} = useContext(DataContext);
    const {checkUserLoged} = useContext(DataContext);
    const navigate = useNavigate();
    
   
   
        /*-------------------Up Arrow Quantity------------------- */
        const sume = (id) => {
            const cart = items.map(item => {
                if(item.id == id){
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
            setItems(cart)
        }
        /*-----------------------------------------------------*/

    /*-------------------Down Arrow Quantity------------------- */
        const reste = (id) => {
            const cart = items.map(item => {
                if(item.id == id){
                    if(item.quantity == 1 ){
                        return item
                    }else{
                        return {...item, quantity: item.quantity - 1}
                    }
                }
                return item
            })
            setItems(cart)
        }
        /*-------------------------------------------------------*/     

        /*----------------- Price by Items * Quantity--------------------- */ 
        const eachItemPrice = items.map(item => {
        return( item.quantity * item.price)
        })
        /*------------------------------------------------------- */

        /*-----------------------Total Price--------------------- */
        var totalPrice = () => {
            if(eachItemPrice.length===0) {
                console.log("Cart is empty=",eachItemPrice)
                return 0
            }
            else{
                const totalSum = eachItemPrice.reduce(function (acc, element){
                    return acc + element
                })
                console.log("valor total price=",totalSum);
                return totalSum
            }
         }
         
        /*--------------------------------------------------------- */

        /*-------------Total Items ------------------------------- */
        const eachItemsQuantity = items.map(item => {
            return item.quantity
            })

            var totalItems = () => {
                if(eachItemsQuantity.length===0) {
                    return 0
                }
                else{
                    const todoItems = eachItemsQuantity.reduce(function (acc, element){
                        return acc + element
                    })
                    console.log("valor total Quantity=",todoItems);

                    return todoItems
                }
            
             }


        /*-------------------------------------------------------- */

        /*-------------Check Out products-------------------------- */
        //Check is the user is log in before pay
        const CheckOut=()=>{
            console.log("Aqui");

            const value =checkUserLoged;
           console.log("user log in =",value);

           {value? navigate('/Payment'): navigate('/Login')}
      
        }

        /*--------------------------------------------------------- */

        

        /*---------------- Remove Item -------------------------- */
        const remove_item =(id)=>{
            const removed = items.filter((item) => item.id !== id);
            setItems(removed);

        }
        /*------------------------------------------------------ */
        return (
            <div className="carts show">
                <div className="cart show">   
                    <div className="cart_close">
                        <Link to="/products">
                            <box-icon name="x"></box-icon>
                        </Link>                    
                    </div>
                    
                    <h2> Your cart</h2>

                    <div className='cart_center'>
                    
                        {items.map(item => (
                        
                            <div className='cart_item'>
                                <img src={item.image} alt=""/> 
                                    <div className='Precio'>
                                        <h3>{item.title}</h3> <br/>
                                        
                                        <div>
                                        <span className='price'>Price =${item.price} </span> 
                                    </div>                 
                                    </div>

                                    
                                   
                                    <div className='arrow'>  
                                        
                                        <box-icon name="up-arrow" type="solid" onClick={()=> sume(item.id)}></box-icon> 
                                        <box-icon name="down-arrow" type="solid" onClick={()=> reste(item.id)} ></box-icon>
                                        
                                    </div>
                                    <div className='remove_item'>
                                        <box-icon name="trash" type="solid" color="red" onClick={()=> remove_item(item.id)} ></box-icon>
                                        <p  className='quantityPrice'>  {item.quantity} </p> 
                                    </div>

                                    <div>
                                    
                                    </div>
                                    
                                

                            </div>
                        )) }                            
                         <h3 className='product_footer'> {totalPrice()===0 ? '':'Total Items='} {totalPrice()!==0 ? totalItems() : ""} </h3>    
                         <h3 className='product_footer'> {totalPrice()===0 ? <h2  className='empyCartTitle'>You Cart is Empty</h2>:'Total Price= $'} {totalPrice()!==0 ? totalPrice().toFixed([2]) : ""} </h3> 
                         
                         {totalPrice()!==0?
                         <>
                         <a href="#">
                         <div className='btn-checkOut' >                        
                            <p onClick={()=> CheckOut()} >Proceed to Checout</p>                        
                        </div>
                        </a> 
                        </>: ""}
                        
                     
                        
                    </div>                    
                        
                        
                </div>

            
            </div>
        );
    
}
