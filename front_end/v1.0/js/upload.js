function uploadFile() {
	var formData = new FormData();
	var file = document.getElementById('file').files[0];
	formData.append("img", file);
	$.ajax({
	    url: "./jsondir/upload.json",
	    type: "post",
	    data: formData,
	    dataType: "json",
	    cache: false,
	    processData: false,
	    contentType: false, 
	    success: function (data) {
			if(data.code==200)
				$("#resal").text(data.imgCode1);
				$("#resbl").text(data.imgCode2);
				$("#resal").css("display","block");
				$("#resbl").css("display","block");
				$("#resal").css("opacity","1");
				$("#resbl").css("opacity","1");
				$("#resal").css("top","15%");
				$("#resbl").css("top","50%");
			else
				alert("分析失败！");
	    },
		error:function(err){
			alert("请求失败！")
		},
		beforeSend:function(){
			$("#shadowl").addClass("notclick");
			$("#submitl").addClass("notclick");
		},
		complete:function(){
			$("#shadowl").removeClass("notclick");
			$("#submitl").removeClass("notclick");
		}
	});
}
function changetip() {
	var fileInput = document.getElementById('file');
	var tip = document.getElementById('tip');
	tip.innerHTML = fileInput.value;
}
function gores(){
	var formData = new FormData();
	$.ajax({
	    url: "/imgProcess/createImg",
	    type: "post",
	    data: formData,
	    dataType: "json",
	    cache: false,
	    processData: false,
	    contentType: false, 
		success: function (data) {
			if(data.code==200)
				$("#resimg").attr("src",data.img);
				$("#resar").text(data.imgCode1);
				$("#resbr").text(data.imgCode2);
				$("#resar").css("display","block");
				$("#resbr").css("display","block");
				$("#resar").css("opacity","1");
				$("#resbr").css("opacity","1");
				$("#resar").css("top","15%");
				$("#resbr").css("top","50%");
			else
				alert("分析失败！");
		},
		error:function(err){
			alert("请求失败！")
		},
		beforeSend:function(){
			$("#shadowl").addClass("notclick");
			$("#submitl").addClass("notclick");
		},
		complete:function(){
			$("#shadowl").removeClass("notclick");
			$("#submitl").removeClass("notclick");
		}
	});
}
function work() {
	alert(timgCode);
}


