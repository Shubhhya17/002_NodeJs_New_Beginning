import * as express from "express";

import transactions from "./transactions" 
import accounts from "./accounts"

let app:any = express();

app.use("/module1",transactions)
app.use("/module2",accounts)

app.listen(8080,()=>{
    console.log("Server Started")
})

//https://localhost:8080/module1 means tansactions default will Exclute

//https://localhost:8080/module1/pierre means pierre Code Will Exclute

//https://localhost:8080/module2 means accounts default  will exclute  (POST)

