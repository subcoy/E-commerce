import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';

export const Payment = () => {

    const [payinfo, setPayInfo] = useState(false);
    const {items,setItems} = useContext(DataContext);
  

    const renderForm = (
    <div className="log">
    <form id="miFormulario"  >
    <div className="input-container">
            <label>Name on Card </label>
            <input  type="text" placeholder="Enter your Name" /> 
        </div>
        
        <div className="input-container">
            <label>Card Number</label>
            <input  type="text" placeholder="Enter Card Number"  />   
        </div>
                
        <div className="input-container">
            <label> Security  code </label>
            <input  type="text" placeholder="Security  code" />
       </div>

       <div className="input-container">
            <label>Billing Address</label>
            <input  type="text" placeholder="Billing Address"  /> 
       </div> 
           
       <div className="button-container">
        <button className="input-container" onClick={()=>SaveInfoPay(payinfo)}>Save</button>
        </div>
    
    </form>
</div>
    );


    const SaveInfoPay=()=>{
        return setPayInfo(true)
         }

return(
    <div className="log">
        {console.log("valor pay info", payinfo)}
    <div className="login-form">
        <Link to="/Login">
            <box-icon name="x"></box-icon>
        </Link> 
        <h1 className="title" >Payment information</h1>
        {payinfo? 
        <>
        <h2 > Thanks for you purschase </h2>     
        </> : renderForm}
    </div>
</div>
);
 
}


