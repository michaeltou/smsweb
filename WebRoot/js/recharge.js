$(function(){
		$('input[name="paymenttype"]').click(function(){
			if($('#paymenttype1').get(0).checked){
				$("#scores1").attr("placeholder","您的公司名或银行卡账户名");
				$("#scores2").attr("placeholder","银行卡号");
				$("#credentialsImage").attr("src","image/yinhangzhifu.jpg");
				$("#credentialsHref").attr("href","image/yinhangzhifu.jpg");
			}else if ($('#paymenttype2').get(0).checked) {
				$("#scores1").attr("placeholder","支付宝账户名,或实名认证的公司名");
				$("#scores2").attr("placeholder","支付宝账户");
				$("#credentialsImage").attr("src","image/zhifubaozhifu.jpg");
				$("#credentialsHref").attr("href","image/zhifubaozhifu.jpg");
			}else{
				$("#scores1").attr("placeholder","微信账户名,或实名认证的公司名");
				$("#scores2").attr("placeholder","微信账户");
				$("#credentialsImage").attr("src","image/weixinzhifu.jpg");
				$("#credentialsHref").attr("href","image/weixinzhifu.jpg");
			}
		});
		
		$("#imageselect").click(function(){
    			$("input[type='file']").click();
   		 });
});


var filechange=function(event){
    var files = event.target.files, file;
    if (files && files.length > 0) {
        // 获取目前上传的文件
        file = files[0];// 文件大小校验的动作
        if(file.size > 1024 * 1024 * 2) {
            alert('图片大小不能超过 2MB!');
            return false;
        }
        // 获取 window 的 URL 工具
        var URL = window.URL || window.webkitURL;
        // 通过 file 生成目标 url
        var imgURL = URL.createObjectURL(file);
        //用attr将img的src属性改成获得的url
        $("#credentialsImage").attr("src",imgURL);
        $("#credentialsHref").attr("href",imgURL);
        // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
        // URL.revokeObjectURL(imgURL);
    }
};