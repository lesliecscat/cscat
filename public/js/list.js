	//列表ajax请求
(function(){
	$.ajax({
		url:"http://127.0.0.1:8080/list",
		type:"get",
		//五请求参数
		dataType:"json"
	}).then(function(res){
		var img1=res[0];
		var img2=res[1];
		var img3=res[2];
		var img4=res[3];
		var img5=res[4];
		var img6=res[5];
		var img7=res[6];
		var img8=res[7];
		var img9=res[8];
		var list_img=document.getElementById("list_img");
		var div_img=list_img.children;
		var len=Math.ceil(res.length/9);
		//动态生成页码
		for(var  j=0;j<len;j++){
			var a=document.createElement("a");
			var button=document.getElementById("button");
			 button.appendChild(a);
			 if(j==0){
				a.className="active";
			 }
			a.innerHTML=j+1;
			// a.id="a"+(j+1);
			 a.href="javascrip:;";
		}
		var html1=`<div>
		<div class="unvisi">
			<span class="heartBeat"><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img1.pic}" alt="">
		<div class="text">
			<p>${img1.title}</p>
			<span>$${img1.price.toFixed(2)}</span>
			<button>ADD TO CART</button>
		</div>
	</div>
	<div>
		<div class="unvisi">
				<span><a href="">zoom</a></span>
				<span><a href="">view</a></span>
			</div>
			<img src="${img2.pic}" alt="">
			<div class="text">
				<p>${img2.title}</p>
				<span>$${img2.price.toFixed(2)}</span>
				<button>ADD TO CART</button>
			</div>
	</div>
	<div>
		<div class="unvisi">
				<span><a href="">zoom</a></span>
				<span><a href="">view</a></span>
			</div>
			<img src="${img3.pic}" alt="">
			<div class="text">
				<p>${img3.title}</p>
				<span>$${img3.price.toFixed(2)}</span>
				<button>ADD TO CART</button>
			</div>
	</div>
	<div>
		<div class="unvisi">
				<span><a href="">zoom</a></span>
				<span><a href="">view</a></span>
			</div>
			<img src="${img4.pic}" alt="">
			<div class="text">
				<p>${img4.title}</p>
				<span>$${img4.price.toFixed(2)}</span>
				<button>ADD TO CART</button>
			</div>
	</div>
	<div>
		<div class="unvisi">
				<span><a href="">zoom</a></span>
				<span><a href="">view</a></span>
			</div>
			<img src="${img5.pic}" alt="">
			<div class="text">
				<p>${img5.title}</p>
				<span>$${img5.price.toFixed(2)}</span>
				<button>ADD TO CART</button>
			</div>
	</div>
	<div>
		<div class="unvisi">
				<span><a href="">zoom</a></span>
				<span><a href="">view</a></span>
			</div>
			<img src="${img6.pic}" alt="">
			<div class="text">
				<p>${img6.title}</p>
				<span>$${img6.price.toFixed(2)}</span>
				<button>ADD TO CART</button>
			</div>
	</div>
	<div>
		<div class="unvisi">
				<span><a href="">zoom</a></span>
				<span><a href="">view</a></span>
			</div>
			<img src="${img7.pic}" alt="">
			<div class="text">
				<p>${img7.title}</p>
				<span>$${img7.price.toFixed(2)}</span>
				<button>ADD TO CART</button>
			</div>
	</div>
	<div>
		<div class="unvisi">
				<span><a href="">zoom</a></span>
				<span><a href="">view</a></span>
			</div>
			<img src="${img8.pic}" alt="">
			<div class="text">
				<p>${img8.title}</p>
				<span>$${img8.price.toFixed(2)}</span>
				<button>ADD TO CART</button>
			</div>
	</div>
	<div>
		<div class="unvisi">
				<span><a href="">zoom</a></span>
				<span><a href="">view</a></span>
			</div>
			<img src="${img9.pic}" alt="">
			<div class="text">
				<p>${img9.title}</p>
				<span>$${img9.price.toFixed(2)}</span>
				<button>ADD TO CART</button>
			</div>
	</div>`;
	div_img[0].innerHTML=html1;
	var img2_1=res[9];
	var img2_2=res[10];
	var img2_3=res[11];
	var img2_4=res[12];
	var img2_5=res[13];
	var img2_6=res[14];
	var img2_7=res[15];
	var img2_8=res[16];
	var img2_9=res[17];
	var html2=`<div>
	<div class="unvisi">
		<span><a href="">zoom</a></span>
		<span><a href="">view</a></span>
	</div>
	<img src="${img2_1.pic}" alt="">
	<div class="text">
		<p>${img2_1.title}</p>
		<span>$${img2_1.price}</span>
		<button>ADD TO CART</button>
	</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img2_2.pic}" alt="">
		<div class="text">
			<p>${img2_2.title}</p>
			<span>$${img2_2.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img2_3.pic}" alt="">
		<div class="text">
			<p>${img2_3.title}</p>
			<span>$${img2_3.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img2_4.pic}" alt="">
		<div class="text">
			<p>${img2_4.title}</p>
			<span>$${img2_4.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img2_5.pic}" alt="">
		<div class="text">
			<p>${img2_5.title}</p>
			<span>$${img2_5.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img2_6.pic}" alt="">
		<div class="text">
			<p>${img2_6.title}</p>
			<span>$${img2_6.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img2_7.pic}" alt="">
		<div class="text">
			<p>${img2_7.title}</p>
			<span>$${img2_7.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img2_8.pic}" alt="">
		<div class="text">
			<p>${img2_8.title}</p>
			<span>$${img2_8.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img2_9.pic}" alt="">
		<div class="text">
			<p>${img2_9.title}</p>
			<span>$${img2_9.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>`
	div_img[1].innerHTML=html2;
	var img3_1=res[18];
	var img3_2=res[19];
	var img3_3=res[20];
	var img3_4=res[21];
	var img3_5=res[22];
	var img3_6=res[23];
	var img3_7=res[24];
	var img3_8=res[25];
	var img3_9=res[26];
	var html3=`<div>
	<div class="unvisi">
		<span><a href="">zoom</a></span>
		<span><a href="">view</a></span>
	</div>
	<img src="${img3_1.pic}" alt="">
	<div class="text">
		<p>${img3_1.title}</p>
		<span>$${img3_1.price}</span>
		<button>ADD TO CART</button>
	</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img3_2.pic}" alt="">
		<div class="text">
			<p>${img3_2.title}</p>
			<span>$${img3_2.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img3_3.pic}" alt="">
		<div class="text">
			<p>${img3_3.title}</p>
			<span>$${img3_3.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img3_4.pic}" alt="">
		<div class="text">
			<p>${img3_4.title}</p>
			<span>$${img3_4.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img3_5.pic}" alt="">
		<div class="text">
			<p>${img3_5.title}</p>
			<span>$${img3_5.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img3_6.pic}" alt="">
		<div class="text">
			<p>${img3_6.title}</p>
			<span>$${img3_6.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img3_7.pic}" alt="">
		<div class="text">
			<p>${img3_7.title}</p>
			<span>$${img3_7.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img3_8.pic}" alt="">
		<div class="text">
			<p>${img3_8.title}</p>
			<span>$${img3_8.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img3_9.pic}" alt="">
		<div class="text">
			<p>${img2_9.title}</p>
			<span>$${img3_9.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>`
	div_img[2].innerHTML=html3;
	var img4_1=res[27];
	var img4_2=res[28];
	var img4_3=res[29];
	var img4_4=res[30];
	var img4_5=res[31];
	var img4_6=res[32];
	var img4_7=res[33];
	var img4_8=res[34];
	var img4_9=res[35];
	var html3=`<div>
	<div class="unvisi">
		<span><a href="">zoom</a></span>
		<span><a href="">view</a></span>
	</div>
	<img src="${img4_1.pic}" alt="">
	<div class="text">
		<p>${img4_1.title}</p>
		<span>$${img4_1.price}</span>
		<button>ADD TO CART</button>
	</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img4_2.pic}" alt="">
		<div class="text">
			<p>${img4_2.title}</p>
			<span>$${img4_2.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img4_3.pic}" alt="">
		<div class="text">
			<p>${img4_3.title}</p>
			<span>$${img4_3.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img4_4.pic}" alt="">
		<div class="text">
			<p>${img4_4.title}</p>
			<span>$${img4_4.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img4_5.pic}" alt="">
		<div class="text">
			<p>${img4_5.title}</p>
			<span>$${img4_5.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img4_6.pic}" alt="">
		<div class="text">
			<p>${img4_6.title}</p>
			<span>$${img4_6.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img4_7.pic}" alt="">
		<div class="text">
			<p>${img4_7.title}</p>
			<span>$${img4_7.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img4_8.pic}" alt="">
		<div class="text">
			<p>${img4_8.title}</p>
			<span>$${img4_8.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>
<div>
	<div class="unvisi">
			<span><a href="">zoom</a></span>
			<span><a href="">view</a></span>
		</div>
		<img src="${img4_9.pic}" alt="">
		<div class="text">
			<p>${img4_9.title}</p>
			<span>$${img4_9.price}</span>
			<button>ADD TO CART</button>
		</div>
</div>`
	div_img[3].innerHTML=html3;
	})
})();

	var list = document.getElementById("list_img");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var ulIndex=document.getElementById("button");
	var lis=ulIndex.children;
	//console.log(lis);
	var i=0;
	// var DURATION=500;
	WIDTH=930;
	COUNT=4;
	function moveTo(n){
		i=n;	
		console.log(i);
		//console.log(lis[i]);
		list.style.marginLeft=-i*WIDTH+"px";
		for(var li of lis){
			li.className="";
		}
		if(i==COUNT){
			 i=0;
			 list.style.marginLeft=0+"px";		
		}
		if(i==-1){
			i=3;
			list.style.marginLeft=-i*WIDTH+"px";		
   		}
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
		,100)		
	}
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
			},500)
			}
		}
	}
	} 
