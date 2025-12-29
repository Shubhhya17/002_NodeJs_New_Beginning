import * as express from "express"
let transactions:any = express.Router();

transactions.get("/",(req:any, res:any):any=>{
res.status(200).json({massage:"Welcome to the Transation get call"})
})
transactions.get("/pierre", (req:any , res:any):any=>{
res.status(200).json({massage:"Welcome to the Transations Pierre"})
})

export default transactions;