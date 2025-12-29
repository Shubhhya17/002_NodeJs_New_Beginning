//Read get paramerters in expressjs
import * as express from "express";
let app:any = express();
app.get("/sample/user/:uname/pwd/:upwd", (req:any , res:any)=>{

if(req.params.uname === "ashokit" && req.params.upwd === "ashokit"){
    res.send({login:"Pass"});
}else{
    res.send({login:"Fail"})
}
 // let uname:any = req.param.uname;
// let upwd:any = req.param.upwd;

// if(uname === "ashokit" && upwd === "ashokit"){
//     res.send({login:"sucess"})
// }else{
//     res.send({login:"Fail"})
// }
// console.log(uname, upwd)
// console.log(req.param.param1, req.params.param2);

})
app.listen(8080, ()=>{
    console.log("Server Stated")
})

//http://localhost:8080/sample?uname=ashokit&upw=ashokit