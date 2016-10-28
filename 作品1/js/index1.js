(function($a){
	$a("body").width($a(window).width());
	$a("body").height($a(window).height());
	var arr = ["#000","#2691c9","#dddddd","#000"];
	var book = $a(".book");
	var mask = $a(".mask")[0];
	mask.style.transform = "translate3d("+-$a("body").width()+"px,0,0)";
	var len = book.length;
	var arr1 = [
		{x:564,y:1022.625,r:270,s:0.50,z:10,index:0},
		{x:107.724,y:892.625,r:280,s:0.56,z:20,index:1},
		{x:-50.418,y:773.625,r:290,s:0.60,z:30,index:2},
		{x:-150.654,y:654.625,r:300,s:0.66,z:40,index:3},

		{x:-109.409,y:546.907,r:310,s:0.7,z:50,index:4},
		{x:-8.32494,y:449.418,r:320,s:0.76,z:60,index:5},
		{x:115.654,y:363.625,r:330,s:0.82,z:70,index:6},
		{x:256.418,y:298.191,r:340,s:0.88,z:80,index:7},
		{x:407.724,y:257.672,r:350,s:0.94,z:90,index:8},
		{x:564,y:244,r:360,s:1,z:100,index:9},
		{x:720.276,y:257.672,r:370,s:0.94,z:90,index:10},
		{x:871.582,y:298.191,r:380,s:0.88,z:80,index:11},
		{x:1012.35,y:363.625,r:390,s:0.82,z:70,index:12},
		{x:1136.32,y:449.418,r:400,s:0.76,z:60,index:13},
		{x:1237.41,y:546.907,r:410,s:0.7,z:50,index:14},

		{x:1237,y:654.625,r:420,s:0.66,z:40,index:15},
		{x:1136.582,y:773.625,r:430,s:0.60,z:30,index:16},
		{x:1012.35,y:892.625,r:440,s:0.56,z:20,index:17},
		{x:871.32,y:1022.625,r:450,s:0.50,z:10,index:18},
		{x:1237.41,y:1163.625,r:460,s:0.56,z:0,index:19}
	];
	for(var i = 0; i<len; i++){
		//console.log('arr1[i].r+deg,arr1[i].z);
		book[i].style.transform = 'translate3d('+arr1[i].x+'px, '+arr1[i].y+'px, 0) rotate('+arr1[i].r+'deg) scale('+arr1[i].s+')';
		book[i].style.zIndex = ""+arr1[i].z+"";
		book[i].setAttribute("data-index",arr1[i].index);
		if(i<8){
			book[i].style.background = "rgb("+(217+i*5)+", "+(64+i*5)+", "+(53+i*5)+")";
		}else if(i>2 && i<6){
			book[i].style.background = "rgb("+(74+i*5)+", "+(66+i*5)+", "+(173+i*5)+")";
		}else if(i>5 && i < 9){
			book[i].style.background = "rgb("+(34-i*5)+", "+(145-i*5)+", "+(169+i*5)+")";
		}else{
			book[i].style.background = "rgb("+(241-i*5)+", "+(208-i*5)+", "+(87-i*5)+")";
		}
	}
	$a(".book").on("click",function(){
		mask.style.background = ""+arr[Math.ceil(Math.random()*4)]+"";
		var poist1 = [];
		var poist2 = [];
		if(this.dataset.index - 9!=0){
			
			var n = this.dataset.index - 9;
			var m = null;
			
			for(var i = 0; i<len; i++){
				book[i].style.transition = ".5s"; 
				if(book[i] != this){
					
					m = book[i].dataset.index - n;
					
					if(m>len-1){
						poist1.push(book[i]);
						fn();
						
					}else if(m<0){
						poist2.push(book[i]);
						fn1();
						
					}else{
						book[i].style.zIndex = ''+arr1[m].z+'';
						book[i].style.transform = 'translate3d('+arr1[m].x+'px, '+arr1[m].y+'px, 0) rotate('+arr1[m].r+'deg) scale('+arr1[m].s+')';
						
						book[i].setAttribute("data-index",arr1[m].index);
					}
					this.style.zIndex = "110";
					this.style.transform = 'translate3d('+arr1[9].x+'px, '+arr1[9].y+'px, 0) rotate('+arr1[9].r+'deg) scale('+arr1[9].s+')';
		    		this.setAttribute("data-index",arr1[9].index);
				}
			}
			function fn(){
				for(var j = 0; j<poist1.length; j++){
							
					poist1[j].style.zIndex = ''+arr1[j].z+'';
					poist1[j].style.transform = 'translate3d('+arr1[j].x+'px, '+arr1[j].y+'px, 0) rotate('+arr1[j].r+'deg) scale('+arr1[j].s+')';
					poist1[j].setAttribute("data-index",arr1[j].index);
				}
			}	
			function fn1(){
				for(var j = 0; j<poist2.length; j++){
					poist2[j].style.zIndex = ''+arr1[len-j-1].z+'';
					poist2[j].style.transform = 'translate3d('+arr1[len-j-1].x+'px, '+arr1[len-j-1].y+'px, 0) rotate('+arr1[len-j-1].r+'deg) scale('+arr1[len-j-1].s+')';
					
					poist2[j].setAttribute("data-index",arr1[len-j-1].index);
				}
			}
			
			mask.style.transitionDuration = "0.5s";
			mask.style.transitionDelay = "0.5s";
			mask.style.transform = "translate3d(0,0,0)";
			setTimeout(function(){
				$(".wrap").css("display","none");
				$(".wrap1").css("display","block");
				mask.style.transform = "translate3d("+-$a("body").width()+"px,0,0)";
			},1100)
			
		}else{
			this.style.zIndex = "110";
			mask.style.transitionDuration = "0.4s";
			mask.style.transform = "translate3d(0,0,0)";
			setTimeout(function(){
				$(".wrap").css("display","none");
				$(".wrap1").css("display","block");
				mask.style.transform = "translate3d("+-$a("body").width()+"px,0,0)";
			},1000)
		}
	})
	
			
})(jQuery)