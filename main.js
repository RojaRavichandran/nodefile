const express = require('express')
const app=express();
const port=5000;

app.get('/' , (req , res)=>{

   res.json( {msg:'hello from simple server :)'})

})

 app.listen(port,()=>
    console.log(`this is the port number http://127.0.0.1:${port}`)
)




