import React, {useContext, useState} from 'react';
import '../style/index.css';
import logo  from '../images/logo1.jpg';
import 'boxicons';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/Dataprovider';


export const Header = () => {
 
 const {items,setItems} = useContext(DataContext);
 const {userLoged,setUserLoged} = useContext(DataContext);
 console.log("header usuario=",userLoged)
 

 /*----------------- show total items----------- */
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
            
            return todoItems
        }
    
     }

    const LogOut=()=>{

        return  setUserLoged(false)
    }

 /*-------------------------------------------- */

  return (
    <header>
       
        <Link to="/products">
            <img className='logo' src = {logo} alt="logo" />            
        </Link>

         <ul>
            <li >
                <Link to="/">HOME</Link>
            </li>
            <li >
                <Link to="/products">PRODUCTS</Link>
            </li>        
        </ul> 
        
        <div>
            <div  >
            <Link to="/Cart">
                <box-icon name="cart"></box-icon>
                <span >{totalItems()}</span>
            </Link>
            </div>

        </div> 
        <div className='view-user-name'>
            {userLoged? <span>{userLoged}</span>:
                <div className='login'>
                            <Link to="Login">
                                <p>Sign In</p>
                            </Link>
                </div>
            } 

                {userLoged?
                <div className='login'>
                            <a href="#">
                                <div>
                                <buttom  onClick={()=>LogOut()} >Log Out </buttom>                            
                                </div>
                            </a> 
                </div>
                :''}

        </div>




    </header>

  )
}