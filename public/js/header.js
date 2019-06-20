(function(){
    $.ajax({
        url:"http://127.0.0.1:8080/header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("header");
            $(`<link rel="stylesheet" href="header.css">`).appendTo("head");
        }
    })
})()