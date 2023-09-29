import React, { useContext } from 'react';
import { DataContext } from '../context/Dataprovider'; 
import { Link } from 'react-router-dom';

export const DetailsProduct = (prod) => {
  
    const {cart, SetCart} = useContext(DataContext)   
    
    /*-------------------Rating Stars------------------------- */
    const RatingStar =(starsAvg) =>{
        
        const fullStars = Math.floor(starsAvg);
        const starArr = [];
        for(let i = 1; i <= fullStars; i++)
            { starArr.push(1); }
        if(starsAvg < 5) {
                const result = starsAvg - fullStars;
                const partialStar =result.toFixed(1);
                console.log("starAvg=",starsAvg);
                console.log("Fullstars=",fullStars);
                console.log("Partialstars=",partialStar);
                  // Calculates the partial star. For example 4.3 - 4 = 0.3. 0.3 will get 
                  // added to the array in the next line to represent the partial star
                 starArr.push(partialStar);
                  // Adds the partial star to the array              
                 const emptyStars = 5 - starArr.length;
                  // Calculates the number of empty stars
              
                for(let i=1; i<=emptyStars; i++) {
                    starArr.push(0);
                   }
                  // This for loop adds 0s to the array to represent empty stars
        }
              
              const stars = starArr.map((val, i) => {
                return <div key={i} >★</div>
                })
                console.log("estrellas=", stars)
        

    }
 /*---------------------------------------------------------- */
    return (
        
        <>
        
        <div className="carts show">
                <div className="cart show" >
                    <div className="cart_close">
                        <Link to="/products">
                            <box-icon name="x"></box-icon>
                        </Link>                    
                        </div>

                    <h2> Product Details </h2>
                    <div >
                        {cart.map(item => (
                                <div className='cart_item'>
                                    
                                    <img src={item.image} alt=""/> 
                                    <div className='view'>
                                        <h3 >{item.title}</h3>
                                        <p >{item.description}</p>
                                        <p>Rating</p>
                                        { RatingStar(item.rating.rate)}
                                        
                                    </div>

                                    <div>

                                    </div>
                                    
                                   
                                </div>
                            ))
                        }

                    </div>
                    
                </div>
        </div>
        
        </>
        
    );
}


