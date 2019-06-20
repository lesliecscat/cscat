var list = document.getElementById("list");
var a1=document.getElementById("a1");
var a2=document.getElementById("a2");
var a3=document.getElementById("a3");
function get_img1(){
	list.style.left=0+"px";
}
function get_img2(){
	list.style.left=-400+"px";
}
function get_img3(){
	list.style.left=-800+"px";
}
var intro_list = document.getElementById("intro_list");
var a4=document.getElementById("a4");
var a5=document.getElementById("a5");
var a6=document.getElementById("a6");
var bg1=document.getElementById("bg1")
var bg2=document.getElementById("bg2")
var bg3=document.getElementById("bg3")
function get_text1(){
	intro_list.style.left=0+"px";
	bg1.style.background="rgb(0,109,70,.5)";
	bg1.style.color="#fff";
	a4.style.background="rgb(0,109,70,.5)";
	a5.style.background="transparent";
	a6.style.background="transparent";
}
function get_text2(){
	intro_list.style.left=-850+"px";
	bg2.style.background="rgb(0,109,70,.5)";
	bg2.style.color="#fff";
	a4.style.background="transparent";
	a6.style.background="transparent";
	a5.style.background="rgb(0,109,70,.5)";
}
function get_text3(){
	intro_list.style.left=-1700+"px";
	bg3.style.background="rgb(0,109,70,.5)";
	bg3.style.color="#fff";
	a4.style.background="transparent";
	a5.style.background="transparent";
	a6.style.background="rgb(0,109,70)";
}
//颜色变化动画事件
var colorChange1=document.getElementById("colorChange1");
var colorChange2=document.getElementById("colorChange2");
var colorChange3=document.getElementById("colorChange3");
//初始化次数值 为了调用函数后清空动画的样式
var count1=1;
var count2=1;
var count3=1;
function get_color1(){
	if (count1%2!=0)
	{
	colorChange1.style.width="400px";
//	colorChange.style.height="400px";
	colorChange1.style.background="rgba(10,165,226,.2)";
	colorChange1.style.opacity="1";
	colorChange1.style.transform="rotateY(360deg)";
	colorChange1.style.transition="width .5s linear ,transform 1s linear .5s";
	colorChange1.style.zIndex="3";
	colorChange2.style.zIndex="0";
	colorChange3.style.zIndex="0";
	count1++;
	return;
//	colorChange.style.transition="";
	}
	if (count1%2==0)
	{
		colorChange1.style.width="0px";
		colorChange1.style.transform="";
		colorChange1.style.transition="";
		count1++;
	}
	
}

function get_color2(){
	if (count2%2!=0)
	{
		colorChange2.style.width="400px";
		colorChange2.style.background="rgba(64,224,208,.5)";
		colorChange2.style.opacity="1";
		colorChange2.style.transform="rotateX(180deg)";
		colorChange2.style.transition="width .5s linear,transform 1s linear .5s";
		colorChange1.style.zIndex="0";
		colorChange2.style.zIndex="3";
		colorChange3.style.zIndex="0";
		count2++;
	}
	else if(count2%2==0){
		colorChange2.style.width="0px";
		colorChange2.style.transform="";
		colorChange2.style.transition="";
		count2++;
	}
}
function get_color3(){
	if (count3%2!=0)
	{
		colorChange3.style.width="400px";
		colorChange3.style.opacity="1";
		colorChange3.style.background="rgba(176,48,96,.3)";
		colorChange3.style.transform="rotate3D(1,1,1,360deg)";
		colorChange3.style.transition="width .5s linear,transform 1s linear .5s";
		colorChange1.style.zIndex="0";
		colorChange2.style.zIndex="0";
		colorChange3.style.zIndex="3";
		count3++;
	}else if(count3%2==0){
		colorChange3.style.width="0px";
		colorChange3.style.transform="";
		colorChange3.style.transition="";
		count3++;
	}
}
//放大镜
var get_big=document.getElementById("get_big");
var mag=document.getElementById("mag");
//鼠标移入 放大镜和放大图显示
list.onmouseover=function(){
	mag.style.display="block";
	get_big.style.display="block";

}
//鼠标移动 遮罩层距离图片左边的距离是鼠标x轴位置减去遮罩层宽度的一半
list.onmousemove=function(e){
	var left=e.clientX-mag.offsetWidth/2-50;
	var top=e.clientY-mag.offsetHeight/2-50;
	if (left<=0)
	{
		left=0;
	}
	if (top<=0)
	{
		top=0;
	}
	var leftMax=200;//list.offsetWidth-mag.offsetWidth
	if (left>leftMax)
	{
		left=leftMax;
	}
	var topMax=list.offsetHeight-mag.offsetHeight;
	if (top>topMax)
	{
		top=topMax;
	}
	mag.style.left=left+"px";//设置遮罩层的top和left
	mag.style.top=top+"px";
	// var radioX=left/leftMax;//计算比例
	// var radioY=top/topMax;
	var bleft=2*left;
	var btop=2*top;
	get_big.style.backgroundPositionX=-bleft+"px";
	get_big.style.backgroundPositionY=-btop+"px";
	
}
list.onmouseout=function(){
		mag.style.display="none";
		get_big.style.display="none";
	}

//用户评价
function user_submit(){
	
	//AJAX向数据库增加评价数据
	var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
	result = xhr.responseText;
	console.log(result);
         if (result == 1) {
           //alert("评价成功");
		   user.value=anony(user.value);
		   eva_content.innerHTML+='<tr><td><img src="images/yhm.png" alt=""><span>'+user.value+'</span></td><td>'+content.value+'</td></tr>';
             } else {
            alert("评价失败");
                    }
                }
            };
    xhr.open("post","http://127.0.0.1:8080/user/userEvalue",true);
    var formdata="uname="+user.value+"&ucontent="+content.value;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}
function modal_evalue(){
	var modal=document.getElementById("modal");
	modal.style.display="block";
}
//页面加载 自动调用数据库的评论
function evalue(){
	var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
	result = xhr.responseText;
	//console.log(result);
	var arr=JSON.parse(result);
	for (var i=0;i<arr.length;i++)
	{	
		//console.log(arr[i].uname,typeof(arr[i].uname))
		user.value=anony(arr[i].uname);
		//console.log(user.value);
		//=arr[i].uname;
		//content.value=arr[i].ucontent;
		eva_content.innerHTML+='<tr><td><img src="images/yhm.png" alt=""><span>'+user.value+'</span></td><td>'+arr[i].ucontent+'</td></tr>';
	}
	//eva_content.innerHTML+='<tr><td><img src="images/yhm.png" alt=""><span>'+user.value+'</span></td><td>'+content.value+'</td></tr>';
        
        }
	};
    xhr.open("get","http://127.0.0.1:8080/user/userOnload",true);
    //var formdata="uname="+user.value+"&ucontent="+content.value;
    //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //xhr.send(formdata);
	xhr.send();
}
function modal_none(){
	var modal=document.getElementById("modal");
	modal.style.display="none";
}
//用户匿名函数
function anony(str){
	var str1=str.substr(1,str.length-1);
	var str=str.replace(str1,"****");
	//console.log(str1);
	return str;
}

