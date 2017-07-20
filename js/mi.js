$(function(){
	$("#tree #tree-left li").each(function(){
		$(this).hover(function(){
			$("#tree .hidden").css("display","block")
		},
		function(){
			$("#tree .hidden").css("display","none")
		})
	})
	$("#tree .hidden").hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
	
	$("#content #rmjd #rmjd-right li").each(function(){
		$(this).hover(function(){
			$(this).css({"transform":"translateY(-3px)","transition":"transform 0.5s","boxShadow":"0px 5px 5px 1px red"})
		},
		function(){
			$(this).css({"transform":"translateY(3px)","transition":"transform 0.5s","boxShadow":"0px 0px 0px 0px transparent"})
			
		})
	})
	$("#content #rmjd #rmjd-left").hover(function(){
			$(this).css({"transform":"translateY(-3px)","transition":"transform 1s"})
		
	},function(){
			$(this).css({"transform":"translateY(-3px)","transition":"transform 1s"})
		
	})
	
})
