function shop_car(){
	if (!login_name.value)
	{
		window.location.href="http://127.0.0.1:8080/register.html";
	}else{
		window.location.href="/shop_car.html";

	}
}