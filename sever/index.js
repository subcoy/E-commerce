require('dotenv').config()
const express = require("express")  
const app= express(); //expeess funtion
const bcrypt =require('bcrypt');

app.use(express.json()) //allow the app use json

const users = []
/*-------------------- get the users----------------------------------- */
app.get('/users', authenticateToken, (req,res)=>{
    res.json(users.filter(user=> user.email===req.user.email ))

})
/**--------------------------------------------------------------------- */
/*----------------------Creating a user hashing the password and saving inside users[]----- */
app.post('/users', async (req, res) => {
   
       const {email}=req.body
       const EmailChecked= users.some(user => user.email === email);
       if(EmailChecked) {
         return res.status(400).send({e: 'The email is Existing'});
       }
       try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)      
        const user={name: req.body.name, email:req.email, password: hashedPassword}
        users.push(user)
        res.status(201).send({message: "User is Register sucessfully"})
        
                
        }catch{
            res.status(500).send({error: 'Error in server'});

        }

})
/**---------cheking if the user exist--------------- */
app.post('/users/login', async (req, res)=>{
    const user= users.find(user=> user.email=req.body.email)
    if(user==null){
        return res.status(400).send('The email is not register')
    }try{

        if(await bcrypt.compare(req.body.password, user.password)){ // compare the same email and name
            const name = user.name;
            const email =user.email;

            const accessToken = jwt.sign({email},process.env.ACCESS_TOKEN_SECRET);
            res.json({accessToken,name})
            res.send('Success')
        }else{
            res.status(401).json({e: 'Password or email is incorrect'})
        }

        }catch{
                   res.status(500).send()

              }
});
/**--------------------Authenticate user-------------------- */

function authenticateToken( req,res,next){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split('')[1]
    if(token==null) return res.sendStatus(401)
    jvt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, user) =>{
        if(err) return res.sendStatus(403)
        req.user=user
    next()
    } )

}

app.listen(4000)




/*
const express = require("express")
const app= express()
app.listen(5000)
app.get("/",(req,res)=>{
    res.send("hola")

})
const users = []
app.post("/register", (req, res) => {
    res.send('regiuster')
})
app.post('/login', (req, res) => {
    res.send('login')
})
*/