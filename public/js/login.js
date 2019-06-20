function login(){
		//1.创建异步对象
		var xhr=new XMLHttpRequest();   
		//2.监听状态号接受数据
		xhr.onreadystatechange=function(){
			if (xhr.readyState==4&&xhr.status==200)
			{
				var result=xhr.responseText;
				console.log(result);
				if (result==1)
				{
					window.location.href="/index.html?uname="+login_name.value;
				}else{
					var obj=document.getElementById("err");
				obj.style.display="block";
				}
			}
		}
		//3.创建请求
		xhr.open("post","http://127.0.0.1:8080/user/login",true);
		//4.发送请求
		var formdata="uname="+login_name.value+"&upwd="+login_pass.value;
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(formdata);
	}