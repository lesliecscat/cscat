// 左右事件
	var list = document.getElementById("list");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var ulIndex=document.getElementById("button");
	var lis=ulIndex.children;
	var i=0;
	var DURATION=500;
	WIDTH=1200;
	COUNT=4;
	function moveTo(n){
		// 如果没有给n值，相当于轮播自动执行
		if(n==undefined){
			n=i+1;
		}
		if(i==0){//仅仅是在第一张图片才需要判断
			if(n>i){
				list.className="tran";
			}else{
				setTimeout(function(){
					list.className="";
					list.style.marginLeft=-COUNT*WIDTH+"px";
					moveTo(COUNT-1);
				},100)//需要给100ms 这样浏览器才有时间渲染出来效果
				// 此时不能往下执行 因为以下跳转到最后一张图片已经不再符合轮播规则
				return;
			}
		}
		i=n;
		list.style.marginLeft=-i*WIDTH+"px";
		for(var li of lis){
			li.className="";
		}
		if(i==COUNT){
			i=0;
			setTimeout(()=>{	
				list.className="";
				list.style.marginLeft=0+"px";
			},DURATION)	
		}
		//console.log(i);
		lis[i].className="active";
	}
// 设置左右箭头函数
var canClick=true;
	prev.onclick = function() {
		move(-1);
			
	}
	next.onclick = function() {
		move(1);
	}
	function move(x){
		if(canClick==true){
			moveTo(x+i);
		}
		canClick=false;
		setTimeout(
			function(){
				canClick=true;
			}
		,DURATION+100)	
		
	}
//	自动轮播
var box=document.getElementById("box");
//console.log(box);
//var timer;
// function auto_scroll(){
// 	timer=setInterval(function(){
// 		next.onclick();
// 	},2000);
// }
// auto_scroll();
// box.onmouseover=function(){
// 	clearInterval(timer);
// }
//box.onmouseout=auto_scroll;
var timer=setInterval(function(){
	moveTo();
  },3000);
  var clear=function(){
	clearInterval(timer);
	console.log(1111);
  }
  var unclear=function(){
	timer=setInterval(function(){
	  moveTo();
	},3000);
  }
 box.onmouseover=clear;
  box.onmouseout=unclear;
//圆点轮播
//利用冒泡给ul父元素绑定一个onclick事件
var canclick=true;
ulIndex.onclick=function(e){
	if(canclick){
		var a=e.target;
		if(a.nodeName=="A"){
			if(a.className!="active"){
				for(var i=0;i<lis.length;i++){
					if(lis[i]==a){
						break;
					} 
				}
			moveTo(i);
			//canclick=false;
			setTimeout(function(){
				canclick=true;
			},DURATION)
			}
		}
	}
} 
//模态框弹出
var zoom1=document.getElementById("zoom");
var zoom2=document.getElementById("view");
var body=document.getElementById("bg");
var bg_color=document.getElementById("bg_color");
function zoom_1(){
	zoom1.style.display="block";
	//var body=document.getElementById("bg");
	//var bg_color=document.getElementById("bg_color");
	bg_color.style.display="block";
	body.style.overflow="hidden";
}
function zoom_2(){
	zoom2.style.display="block";
}
function zoom_none(){
	zoom1.style.display="none";
	zoom2.style.display="none";
	body.style.overflow="";
	bg_color.style.zIndex="-1";
	bg_color.style.background="transparent";
}
//zoom轮播
var zoom_next=document.getElementById("zoom_next");
var zoom_prev=document.getElementById("zoom_prev");
var zoom_list=document.getElementById("zoom_list");
function scroll(offset) {
	var newLeft;
	newLeft = parseInt(zoom_list.style.left) + offset;
	zoom_list.style.left = newLeft + "px";
	console.log(zoom_list.style.left);
	if (newLeft<-3600)
		{
			zoom_list.style.left =0 + 'px';
		}
		if (newLeft > 0) {
			zoom_list.style.left =-3600 + 'px';
		}
}
//function get_next(){
//	animate1(-1200);
//}
//function get_prev(){
//	animate1(1200);
//}
zoom_prev.onclick = function() {
		scroll(-1200);
		}
zoom_next.onclick = function() {
		scroll(1200);
	}

//底部图片自动轮播

var list_footer=document.getElementById("list_footer"); 
 function animate3(offset){
	var newLeft;
	newLeft = parseInt(list_footer.style.left) + offset;
	list_footer.style.left = newLeft + "px";
	if (newLeft<-1200)
		{
			list_footer.style.left =0 + 'px';
		}
		if (newLeft > 0) {
			list_footer.style.left =-1200 + 'px';
		}
 }
 var timer2;
function auto_scroll2(){
	timer2=setInterval(function(){
		animate3(-600);
	},1000);
}
auto_scroll2();


