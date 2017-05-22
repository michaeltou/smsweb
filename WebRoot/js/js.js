// JavaScript Document

var t;
var n = 2;
var lens = 0;
$(function () {
    //$(".images span a").first().addClass("on");
    $(".images span a").click(function () {
        var i = $(this).index();
        lens = i;
       // $(".images span a").removeClass("on");
        $(".images p").fadeOut();
       // $(this).addClass("on");
        $(".images p").eq(i).fadeIn(800);
    });
    t = setInterval("showPic()", 8000);
});
function showPic() {
    lens = lens >= (n - 1) ? 0 : ++lens;
    $(".images span a").eq(lens).trigger("click");
}




//在线客服
$(document).ready(function(){
	$(".service_div").hide();
	$(".service").hover(
		function(){
			$(".service_div").show();
			$(".service_aa").addClass("service_bb");
			},
		function(){
			$(".service_div").hide();
			$(".service_aa").removeClass("service_bb");
			}
		)
})



//选框触发为空 
//$(document).ready(function(){
//	var car =$(".regsiter_div .input01,.regsiter_div .input02");
//	car.focus(function(){
//		$(this).removeClass("input03");
//		$(this).val("");	
//	})
//})


//软件许可服务协议

function showRjxy(){
	var w=document.documentElement.clientWidth;
	var h=Math.max(document.documentElement.clientHeight,document.body.clientHeight);
	$("#fullbg").css({
		"width":w,
		"height":h	
	});
	$("#fullbg").show();
	$("#dialog").slideDown(800);
}
function closeBg(){
	$("#fullbg").hide();
	$("#dialog").slideUp();	
}