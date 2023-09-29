import React, { useContext, useState } from "react";
import "../login/login.css";
import { DataContext, Dataprovider } from "../../context/Dataprovider";
import { Link } from "react-router-dom";

export const Login = ()=>{
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {userLoged,setUserLoged} = useContext(DataContext);
  const {setCheckUserLoged} = useContext(DataContext);

 /*-----------------capture data from Localstorage--------- */
  var mydatabase= localStorage.getItem("users")
  var database= JSON.parse(mydatabase)
/**---------------------------------------------------------- */

/**------------------------Errors-------------------------- */
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
/*--------------------------------------------------------- */
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.userName === uname.value);

    // Compare user info
    if (userData) {
        if (userData.passwd !== pass.value) 
        {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
            setCheckUserLoged(false);
        } else {
            // valided user  and passwd
            console.log("usuario=",userData.userName);
            setIsSubmitted(true);
            setCheckUserLoged(true);
            setUserLoged(userData.userName)
              }
      } 
      else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
        setCheckUserLoged(false);
            }
  };
  // console.log(setIsSubmitted())
/*---------------------------------------------------------------------- */
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div> 
         <p>You not have Account?</p>
        <div className="btn">
          <Link  to="/Register" > Create Account </Link>
        </div>
      </form>
    </div>
  );
//  console.log("username=", userLoged)
  return (
    <div className="log">
      <div className="login-form">
      <Link to="/products">
                    <box-icon name="x"></box-icon>
                </Link> 
        <div className="title">Sign In </div>
        {isSubmitted ? <div> Welcome {userLoged} </div> : renderForm}
      </div>
    </div>
  );
}

