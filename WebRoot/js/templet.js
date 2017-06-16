$(function(){
		$('#newtemplet').click(function(){
			$('.reg').dialog('open');
		});
		
		$('.reg').dialog({
			autoOpen:false,
			resizable: false,
			modal: true,
			width:530,
			height:480,
			title:'新增模板',
			buttons:{
			'新增':function(){
				$(this).submit();
			},
			'取消':function(){
			$(this).dialog('close');
			}
			},
			open: function (event, ui) {
			 $(".ui-dialog-titlebar-close", $(this).parent()).hide();
			 },
		
		});
		
		$('.reg').show(function(){
		
			if($("select[name='signature'] option").length == 0){
					$("#smssignaturetitle").show();
			}else{
					$("#smssignaturetitle").hide();
			}
			var checkText=$("select[name='commonused']").find("option:selected").text();  //获取Select选择的Text
			$("textarea[name='smscontent']").val(checkText);
		});
		
		$("select[name='commonused']").change(function(){
			var checkText=$("select[name='commonused']").find("option:selected").text();  //获取Select选择的Text
			$("textarea[name='smscontent']").val(checkText);
		});
		
		$('input[name="smstype"]').click(function(){
			$("select[name='commonused']").empty();
			if($('#radio1').get(0).checked){
				$("select[name='commonused']").append("<option value=''></option>");
				$("select[name='commonused']").append("<option value='您的验证码是#code#'>您的验证码是#code#</option>");
				$("select[name='commonused']").append("<option value='您的验证码是#code#。如非本人操作，请忽略本短信'>您的验证码是#code#。如非本人操作，请忽略本短信</option>");
				$("select[name='commonused']").append("<option value='亲爱的#name#，您的验证码是#code#。有效期为#hour#，请尽快验证'>亲爱的#name#，您的验证码是#code#。有效期为#hour#，请尽快验证</option>");
				$("select[name='commonused']").append("<option value='感谢您注册#app#，您的验证码是#code#'>感谢您注册#app#，您的验证码是#code#</option>");
				$("select[name='commonused']").append("<option value='欢迎使用#app#，您的手机验证码是#code#。本条信息无需回复'>欢迎使用#app#，您的手机验证码是#code#。本条信息无需回复</option>");
				$("select[name='commonused']").append("<option value='正在进行登录操作，您的验证码是#code#'>正在进行登录操作，您的验证码是#code#</option>");
				$("select[name='commonused']").append("<option value='验证码是#code#。如非本人操作，请致电#tel#'>验证码是#code#。如非本人操作，请致电#tel#</option>");
				$("select[name='commonused']").append("<option value='#code#(#app#手机验证码，请完成验证)，如非本人操作，请忽略本短信'>#code#(#app#手机验证码，请完成验证)，如非本人操作，请忽略本短信</option>");
			}else if ($('#radio2').get(0).checked) {
				$("select[name='commonused']").append("<option value=''></option>");
				$("select[name='commonused']").append("<option value='您的订单编号：#number#,物流信息：#number1#'>您的订单编号：#number#,物流信息：#number1#</option>");
				$("select[name='commonused']").append("<option value='尊敬的用户，您的帐号于#time#成功充值#content#元，如有疑问请联系客服。'>尊敬的用户，您的帐号于#time#成功充值#content#元，如有疑问请联系客服。</option>");
				$("select[name='commonused']").append("<option value='亲爱的用户，您的包裹已经顺利清关，#name#正在为您派送，单号为：#order#。'>亲爱的用户，您的包裹已经顺利清关，#name#正在为您派送，单号为：#order#。</option>");
				$("select[name='commonused']").append("<option value='您购买的#order#订单已成功消费，祝您生活愉快！'>您购买的#order#订单已成功消费，祝您生活愉快！</option>");
				$("select[name='commonused']").append("<option value='您购买的#code#商品因库存不足，正在为您办理退款，3个工作日内退款将会原路返回到您的付款账户中。'>您购买的#code#商品因库存不足，正在为您办理退款，3个工作日内退款将会原路返回到您的付款账户中。</option>");
			}else{
				$("select[name='commonused']").append("<option value=''></option>");
				$("select[name='commonused']").append("<option value='亲，今天是您家宝宝生日，#username#在此祝您宝宝生日快乐，身体健康，并附送生日优惠礼券一张，亲可登录“我的淘宝-我的优惠卡券”查询'>亲，今天是您家宝宝生日，#username#在此祝您宝宝生日快乐，身体健康，并附送生日优惠礼券一张，亲可登录“我的淘宝-我的优惠卡券”查询</option>");
				$("select[name='commonused']").append("<option value='尊贵的#username#，足足有30天没见您了，送您50元代金券，期待您能回来看看哦！秋冬渐近，注意身体，要早点准备秋装哦！'>尊贵的#username#，足足有30天没见您了，送您50元代金券，期待您能回来看看哦！秋冬渐近，注意身体，要早点准备秋装哦！</option>");
				$("select[name='commonused']").append("<option value='尊敬的#username#会员您好，非常抱歉打扰到您，请尽快为您精心挑选的宝贝买单呦。活动期间库存有限，欲购从速，付款后我们会尽快为您发货！'>尊敬的#username#会员您好，非常抱歉打扰到您，请尽快为您精心挑选的宝贝买单呦。活动期间库存有限，欲购从速，付款后我们会尽快为您发货！</option>");
			}
		});
});
