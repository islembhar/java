const express = require ('express')

const studentRoute=require('./routers/student.route')

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',studentRoute)


app.listen(3000,()=>console.log('server run on port 3000'))