//引入express模块
const express=require('express');
//创建服务器
var server=express();
//创建端口
server.listen(8080);
//静态托管
server.use(express.static('public'));
server.use(express.static('public/images'));
server.use(express.static('public/css'));//使用中间件需要放在路由器的前面
//引入第三方中间件
const bodyParser=require('body-parser');
//把服务器接收的数据格式化为对象 不使用扩展对象
server.use(bodyParser.urlencoded({extended:false}));
//引入用户模块路由器
var userRouter=require('./routers/user.js');
var list=require("./routers/list.js")
server.use('/user',userRouter);
server.use("/list",list);
