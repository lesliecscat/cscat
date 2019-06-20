function Scroll(){
			var a=0;
			var b=0;
			var m=0;
			var pics=document.getElementsByClassName('pics'); 
			

			//自动轮播	
			
			setInterval(Next,1000);
			for(var j=0;j<pics.length;j++){a=j;pics[j].style.zIndex=a++;}
			function Next(){
        for(var i=0;i<pics.length;i++){
					b=i;
        if(b<pics.length-1){
            m=pics[b].style.zIndex;
            pics[b].style.zIndex=pics[b+1].style.zIndex;
            pics[b+1].style.zIndex=m;
        }else{
            m=pics[a].style.zIndex;
            pics[a].style.zIndex=pics[0].style.zIndex;
            pics[0].style.zIndex=m;
				}
        };
    };

};
var list=document.getElementByClassName("list");
list.style.transition="all 10s linear 2s";
Scroll();