const express=require("express");
//引入路由
const router=express.Router();
//引入mysql连接池对象
const pool=require("../pool.js")
//首页请求路由
var sql="select * from cs_list";
router.get("/",(req,res)=>{
    pool.query(sql,(err,result)=>{
        if(result.length>0){
            res.send(result);
        }else{
            res.send("err");
        }
    })
})
//到处路由
module.exports=router;