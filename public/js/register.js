function name_user(){
        reg_users.innerHTML="请输入用户名";
                }
    function name_user_notnull(){
        if(reg_inp.value){
			//console.log(reg_inp.value);
			var reg=/^[a-z0-9A-Z-_]{6,12}$/;
			//console.log(reg.test(reg_inp.value));
			if(reg.test(reg_inp.value)==true){
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    result = xhr.responseText;
                    if (result == 1) {
                        reg_users.innerHTML = "用户名被占用";
                    } else {
                        reg_users.innerHTML = "用户名可用";
						}
					}
				 };
				xhr.open("post","http://127.0.0.1:8080/user/userReg",true);
				var formdata="uname="+reg_inp.value;
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				xhr.send(formdata);
			}else{
				reg_users.innerHTML = "用户名长度不对";
				}
			}
          
        if(!reg_inp.value){
            reg_users.innerHTML="用户名不能为空";
             }
		if (reg_users.innerHTML == "用户名可用")
		{
			return true;
		}
    }
    function pass_user(){
        reg_pass.innerHTML="请输入密码";
    }
    function pass_user_notnull(){
        if(pass_inp.value){
			//console.log(pass_inp.value)
			var reg=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
			//console.log(reg.test(pass_inp.value))
			if (reg.test(pass_inp.value)==true)
			{
				reg_pass.innerHTML="密码正确";
				return true;
			}else{
				reg_pass.innerHTML="密码格式不正确";
			}
            
        }else{
            reg_pass.innerHTML="密码不能为空";
        }
    }
    function phone_user(){
        reg_phone.innerHTML="请输入手机号";
    }
    function phone_user_notnull(){
        if(phone_inp.value){
			var reg=/^1[3-8]\d{9}$/;
            if(reg.test(phone_inp.value)==true){
                reg_phone.innerHTML="手机号正确";
				return true;
            }else{
				reg_phone.innerHTML="手机号无效";
				}

        }else{reg_phone.innerHTML="手机号不能为空";}
    }
	console.log(name_user_notnull(),pass_user_notnull(),phone_user_notnull());
   function register(){
	   if (name_user_notnull()==true&&pass_user_notnull()==true&&phone_user_notnull()==true)
	   {
		   var xhr=new XMLHttpRequest();
			console.log(xhr);
			xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
			if (result==1)
			{
				var obj=document.getElementById("success");
				obj.style.display="block";
				//window.location.href="/login.html"
			}else{
				var obj=document.getElementById("err");
				obj.style.display="block";
				}
            
			}
		}
        xhr.open("post","http://127.0.0.1:8080/user/reg",true)
        var formdata="uname="+reg_inp.value+"&upwd="+pass_inp.value+"&phone="+phone_inp.value;
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(formdata);
	   }else{
		   var obj=document.getElementById("err");	
			obj.style.display="block";
			}
    }