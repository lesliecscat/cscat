const express=require("express");
//引入路由
const router=express.Router();
//引入mysql连接池对象
const pool=require("../pool.js")
//用户注册用户验证路由
router.post("/userReg",function(req,res){
	var obj=req.body;
	pool.query("select * from cs_user where uname=?",[obj.uname],function(err,result){
		if (err) throw err;
		if (result.length>0)
		{
			res.send("1");
		}else{
			res.send("0");
		}
	})
})
//用户注册路由
router.post("/reg",function(req,res){
	var obj=req.body;
	console.log(obj);
	pool.query("insert into cs_user values(?,?,?,?)",[null,obj.uname,obj.upwd,obj.phone],(err,result)=>{
		if (result.affectedRows>0)
		{
			console.log(result);
			res.send("1")
		}else{
			res.send("0")
			}
	})
})
//登录路由
router.post("/login",(req,res)=>{
	var obj=req.body;
	pool.query("select * from cs_user where uname=? and upwd=?",[obj.uname,obj.upwd],(err,result)=>{
		if (result.length>0)
		{
			res.send("1")
		}else{
			res.send("0")
			}
	})
})
module.exports=router;
//用户评价路由
router.post("/userEvalue",(req,res)=>{
	var obj=req.body;
	pool.query("insert into cs_evalue values(?,?)",[obj.uname,obj.ucontent],(err,result)=>{
		if (result.affectedRows>0)
		{
			console.log(result);
			res.send("1")
		}else{
			res.send("0")
			}
	})
})
//页面加载自动调用评价数据
router.get("/userOnload",function(req,res){
	var obj=req.body;
	pool.query("select * from cs_evalue",function(err,result){
		if (err) throw err;
		if (result.length>0)
		{
			res.send(result);
		}else{
			res.send("0");
		}
	})
})