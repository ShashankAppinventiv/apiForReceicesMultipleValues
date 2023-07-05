const express=require('express')

const app=express()

app.use(express.json())


app.post('/',(req,res)=>{

    let sum=0;
    let user=req.body;
    Object.values(user).forEach(element=>{
        sum=sum+element;
    })
    res.send("sum is = "+sum)
    res.end()
})

app.listen(3000)