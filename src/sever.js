const express = require("express");
const routes = require("./routes");

const app = express();


app.use(express.json())
app.use(routes)

app.listen('3000',()=>{
    console.log('sua aplicação está rodando na porta 3000 do seu localhost')
    
})