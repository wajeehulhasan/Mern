const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('Hello world')
})

app.get('/about', (req,res) =>{
    res.send("Hello from Hasan")

})
app.listen(port, () => {
    console.log(`Port is ${port}`)
    
})


