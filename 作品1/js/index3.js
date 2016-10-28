(function($a){
	var $window = $a(window);
	var $body = $a("body");
	var $wrap = $a(".wrap");
	var oldWidth = 1366;
	var states = true;
	var $content = $a('#content');
	var $content1 = $a('#content1');
	var content1 = $a(".content1");
	var $content2 = $a("#content2");
	var $content1Children = content1.children();
	content1.css("width",$window.width()*$content1Children.length);
	$content1Children.each(function(index,item){
		$(item).css("width",$window.width());
	})
	$wrap.css({	
		width:oldWidth,
		left:-Math.abs(oldWidth-$window.width())/2
	})
	$window.resize(function(){
		var newWidth = Math.abs(oldWidth-$window.width());
		$body.css({
			width:$window.width(),
			"min-width":"916px"
		})
		content1.css("width",$window.width()*content1.children().length);
		$content1Children.each(function(index,item){
			$a(item).css("width",$window.width());
		})
		$wrap.css("left",-(newWidth/2));
	})



	var arr = ["#000","#dddddd","#000","pink"];
	var $book = $a(".book");
	var mask = $a(".mask")[0];
	var len = $book.length;
	var backgroundArr = null;
	var onOff = true;
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
	$book.each(function(i,item){
		$(item).css({
			transform:'translate3d('+arr1[i].x+'px, '+arr1[i].y+'px, 0) rotate('+arr1[i].r+'deg) scale('+arr1[i].s+')',
			zIndex : ""+arr1[i].z+""
		})
		$(item).attr("data-index",arr1[i].index);
		if(i <= 2){
			$(item).css("background","rgb("+(187+i*10)+", "+(34+i*10)+", "+(23+i*10)+")")
		}else if(i>2 && i<=5){

			$(item).css("background","rgb("+(74+(i-3)*10)+", "+(66+(i-3)*10)+", "+(173+(i-3)*10)+")")
		}else if(i>5 && i<=8){
			$(item).css("background","rgb("+(34+(i-6)*10)+", "+(145+(i-6)*10)+", "+(169+(i-6)*10)+")")
		}else if(i>8 && i<=11){
			$(item).css("background","rgb("+(128+(i-9)*10)+", "+(178+(i-9)*10)+", "+(60+(i-9)*10)+")")
		}else if(i>11 && i<=14){
			$(item).css("background","rgb("+(187+(i-12)*10)+", "+(34+(i-12)*10)+", "+(23+(i-12)*10)+")")
		}else if(i>14 && i<=17){
			$(item).css("background","rgb("+(74+(i-15)*10)+", "+(66+(i-15)*10)+", "+(173+(i-15)*10)+")")
		}else{
			$(item).css("background","rgb("+(34+(i-18)*10)+", "+(145+(i-18)*10)+", "+(169+(i-18)*10)+")")
		}
	})
	var poist1 = [];
	var poist2 = [];
	
	
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
	$book.on("click",function(){
		
		if (onOff === false) {
			return;
		}
		onOff = false;
		backgroundArr = ""+arr[Math.ceil(Math.random()*3)]+"";
		mask.style.background = ""+backgroundArr+"";
		poist1 = [];
		poist2 = [];
		
		if(this.dataset.index - 9!=0){
			
			var n = this.dataset.index - 9;
			var m = null;
			
			for(var i = 0; i<len; i++){
				$book[i].style.transition = ".5s"; 
				if($book[i] != this){
					
					m = $book[i].dataset.index - n;
					
					if(m>len-1){
						
						poist1.push($book[i]);
						if(poist1.length == Math.abs(n)){
							fn();
						}
						
					}else if(m<0){
						
						poist2.push($book[i]);
						if(poist2.length == Math.abs(n)){
							fn1();
						}
					}else{
						
						$book[i].style.zIndex = ''+arr1[m].z+'';
						$book[i].style.transform = 'translate3d('+arr1[m].x+'px, '+arr1[m].y+'px, 0) rotate('+arr1[m].r+'deg) scale('+arr1[m].s+')';
						
						$book[i].setAttribute("data-index",arr1[m].index);
					}
				}
			}
			this.style.zIndex = "110";
			this.style.transform = 'translate3d('+arr1[9].x+'px, '+arr1[9].y+'px, 0) rotate('+arr1[9].r+'deg) scale('+arr1[9].s+')';
    		this.setAttribute("data-index",arr1[9].index);
			
		}else{
			this.style.transition = ".5s"; 
			this.style.zIndex = "110";
		}
		animate1(this);
		$canvas1.style.display = "block";
	})

	var $clonebook;
	var $canvas1 = $a("#canvas1")[0];
	$canvas1.width = "60";
	$canvas1.height = "60";
	var ctx1 = $canvas1.getContext('2d');
	var n = 0;
	var m = 0;
	var timerCanvas;

	$content2.on("click",function(){
		onOff = true;
		$a(".mask").css("left","-100%");
		$content.css("display","block");
		$content1.css("display","none");
		content1.css("left","0")
		$clonebook.remove();
		clearCtx();
	})



	//运动
	function animate1(ele){
		setTimeout(function(){
			$a(".mask").animate({
				left:0
			},function(){
				$content.css("display","none");
				$content1.css("display","block");
				content1.children(".wrap1").css({
					"background":backgroundArr
				})

				$clonebook = $a(ele).clone().appendTo('.wrap1');
				$clonebook.css({
					animation:"myfirst 0.5s both"
				})
				$clonebook.on("webkitAnimationEnd",function(){
					$content2.css("display","block");
					$content2.animate({
						right:"21px"
					},function(){
						CtrCavs();
					});
				})
			})
			
		},510)
	}


	//圆加载
	function CtrCavs(){
		function blueCircle(){
			ctx1.save();
			ctx1.strokeStyle = "#868585";
			ctx1.lineWidth = 4;
			ctx1.beginPath();
			ctx1.arc(30,30,28,0,Math.PI*2,false);
			ctx1.stroke();	
			ctx1.closePath();
			ctx1.restore();
		}
		function fffCircle(n){
			ctx1.save();
			ctx1.strokeStyle = "#fff";
			ctx1.lineWidth = 4;
			ctx1.beginPath();
			ctx1.arc(30,30,28,-Math.PI/2,-Math.PI/2+n,false);
			ctx1.stroke();
			ctx1.restore();
		}
		timerCanvas = setInterval(function(){

			ctx1.clearRect(0,0,$canvas1.width,$canvas1.height);
			blueCircle();
			fffCircle(n);
			m += 0.0003;
			n += m;
			if(n>6.5){
				clearCtx();
				$clonebook.css({
					animation:"myanimate1 1s both"
				})
				$clonebook.on("webkitAnimationEnd",function(){
					content1.animate({
						left:-$window.width()
					})
				})
			}
		})
	}
	function clearCtx(){
		ctx1.clearRect(0,0,$canvas1.width,$canvas1.height);
		n = 0;
		m = 0;
		$canvas1.style.display = "none";
		clearInterval(timerCanvas);
	}	

	
})(jQuery)