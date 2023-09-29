import React, { useContext, useEffect, useState } from 'react';
import "../login/login.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';

export const Register = () => {

    /*-------------------------get  object from local storage for no losse ------ */
    const getRegister = () => {
        
        var data = localStorage.getItem("users");
        if(data){
          return JSON.parse(data);
        }else{
          return [];
        }
      }
/*---------------React state------------------------------------------- */

const [users,setUsers] =useState(getRegister()); // Register to save  all info in one object
const {setRegister}= useContext(DataContext);
const[name,setName] =useState("");
const[lastName,setLastName] =useState("");
const[email,setEmail] =useState("");
const[userName,setUserName] =useState("");
const[passwd,setPasswd] =useState("");

/*-----------validation react state------------------------------- */
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const [emptyRegister, setEmptyRegister] =useState(false)

/*----------------------------------------------------------------- */

/* save the input infoamtion in object */
const saveInfo =(e)=>{
    if(isSubmitted===true){
        e.preventDefault();
        if(setEmail===false||
            setName===false|| 
            setLastName===false|| 
            setUserName===false ||
            setPasswd===false){

            clearcell();
            {setIsSubmitted(true)}


            }else{
                var myUser = {name,lastName,email,userName,passwd};
             
                setUsers([...users,myUser]);
               
                
                clearcell();
                }

    } else{
        clearcell();
    }

        }
// console.log("Registers",setRegister())
/*--------------- clear the iformation in the form-------  */
const clearcell =() =>
{
    setName("");
    setLastName("");
    setEmail("");
    setUserName("");
    setPasswd("");
    document.getElementById("miFormulario").reset();
}
/*-------------------------------------------------------- */
const StatusRegister= ()=>{
    if(setEmail===false|| setName===false|| setLastName===false|| setUserName===false || setPasswd==false){
            {setIsSubmitted(true)}

        }else{
            {setIsSubmitted(false)}
            {setEmptyRegister(true)}
           
        }
}


/*--------------------put the object in json format in local storage---------------*/
useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);



/*---------------------------------------------------------*/

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const renderForm = (
        <div className="log">
            <form id="miFormulario"  onSubmit={saveInfo}>
            <div className="input-container">
                    <label>Name </label>
                    <input  type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/> <br/><br/>
                </div>
                
                <div className="input-container">
                    <label>Last Name </label>
                    <input  type="text" placeholder="Enter your Last Name" onChange={(e)=>setLastName(e.target.value)} /> <br/><br/>     
                </div>
                
                <div className="input-container">
                    <label>Email </label>
                    <input  type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /> <br/><br/> 
                </div>
                
                <div className="input-container">
                    <label>Username </label>
                    <input  type="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} /><br/><br/>
               </div>

               <div className="input-container">
                    <label>Password</label>
                    <input  type="text" placeholder="Enter your Password" onChange={(e)=>setPasswd(e.target.value)} /> <br/><br/>
               </div> 
                    {(setEmail===false||setName===false|| setLastName===false|| setUserName===false ||setPasswd===false)? isSubmitted==false: isSubmitted==true}
               <div className="button-container">
                <button className="input-container" onClick={()=> StatusRegister()}>Register</button>
               
                </div>
            
            </form>
        </div>
    );
      

    return (

        <div className="log">
            <div className="login-form">

                
                <Link to="/Login">
                    <box-icon name="x"></box-icon>
                </Link> 
                <h1 className="title" >New Account</h1>
                {console.log("valor isSubmitted=",isSubmitted)}
                {isSubmitted===false && emptyRegister===true?  <h2 > Congratulations you have Account </h2> : renderForm}
               
            </div>

            <div>
            {emptyRegister===true && isSubmitted===true ? <h3 > Please Complete the Form</h3> : ""}
            </div>
        </div>
 
    );
}

