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
console.log("iisSubmitted entrada=",isSubmitted)

/*----------------------------------------------------------------- */

/* save the input infoamtion in object */
const saveInfo =(e)=>{
    e.preventDefault();
    {console.log("iisSubmitted save info=",isSubmitted)}
    {name?console.log("name=",name): name}
        if(email==false|| name==false|| lastName==false|| userName==false || passwd==false){
            
            clearcell();
                {setEmptyRegister(true)};
            

                {console.log("pase por If")}
  
            }
            else{ 
                const myUser = {name,lastName,email,userName,passwd};
             
            setUsers([...users,myUser]);
            clearcell();
            {setIsSubmitted(true)}
                {console.log("pase por else")}

                }
        
    }
   
// console.log("Registers",setRegister())
/*--------------- clear the iformation in the form-------  */
const clearcell =() =>{
    setName("");
    setLastName("");
    setEmail("");
    setUserName("");
    setPasswd("");
    document.getElementById("miFormulario").reset();
}
/*-------------------------------------------------------- */
const StatusRegister= ()=>{
    if(email==false|| name==false|| lastName==false|| userName==false || passwd==false){
             isSubmitted==false;
            emptyRegister==true;

            console.log("iisSubmitted  StatusRegister if=",isSubmitted);

        }else{
            isSubmitted==true;
            console.log("iisSubmitted StatusRegister else=",isSubmitted);
            
        }
}


/*--------------------put the object in json format in local storage---------------*/
useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


  const form = document.querySelector('form')
  form.onsubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }
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
                    <input  type="text" placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)}/> 
               
                </div>
                
                <div className="input-container">
                    <label>Last Name </label>
                    <input  type="text" placeholder="Enter your Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />     
                </div>
                
                <div className="input-container">
                    <label>Email </label>
                    <input  type="email" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} /> 
                </div>
                
                <div className="input-container">
                    <label>Username </label>
                    <input  type="text" placeholder="Username" value={userName} onChange={(e)=>setUserName(e.target.value)} />
               </div>

               <div className="input-container">
                    <label>Password</label>
                    <input  type="text" placeholder="Enter your Password" value={passwd} onChange={(e)=>setPasswd(e.target.value)} /> 
               </div> 
                    {/* {(email==false || name==false || lastName==false || userName==false || passwd==false)? isSubmitted==false: isSubmitted==true} */}
                    {console.log("iisSubmitted after=",isSubmitted)}
               <div className="button-container">
                <button type="submit" className="input-container" onClick={StatusRegister()}>Register</button>
                {console.log("iisSubmitted button=",isSubmitted)}
               
                </div>
                <div>
                {emptyRegister? <h2 > Please Complete the Form </h2>:"" }
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
                {isSubmitted ? <h2 > Congratulations you have Account </h2> : renderForm}
            </div>
        </div>
 
    );
}

