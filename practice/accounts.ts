import * as express from "express"

let accounts:any = express.Router()

accounts.get("/", (req:any , res:any):any=>{
res.status(200).json({message:"welcome to accounts modele"})
});

accounts.post("/",(res:any , req:any):any =>{
res.status(200).json({massage: "Welcome to the Post call"})
});


export default accounts;

 