$(function(){
		$('#addsignature').click(function(){
			$('.newsignature').dialog('open');
		});
		
		$('.newsignature').dialog({
			autoOpen:false,
			resizable: false,
			modal: true,
			width:440,
			height:200,
			title:'新增签名',
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
		
		
		$(document).ready(function () { 
			$.ajax({    
		        url:"/sms/servlet/CheckSignatureExistServlet",//servlet文件的名称  
		        type:"GET",  
		        success:function(data, textStatus){ 
                    if(data=="exist"){
                    	$("#addsignature").attr("disabled",false);
                    	$(".goDevAuth").hide();
                    }else{
                    	$("#addsignature").attr("disabled","true");
                    	$(".goDevAuth").show();
                    }
           		 }  
    		});  
		});
		
		$("#search").click(function(){
			//$("tbody").append('<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>');
			var tr = $("<tr></tr>").attr("bgcolor","#FFFFFF"); 
			tr.append($("<td></td>").html("2017-06-02 12:10")); 
			tr.append($("<td></td>").html("【云模网络】")); 
			tr.append($("<td></td>").html("审核中")); 
			tr.append($("<td></td>").html("审核中")); 
			tr.append($("<td></td>").html("普通通道")); 
			tr.append($("<td></td>").html("<input type='button' name='delete' value='删除'></td>")); 
			//tr.append($("<td></td>").html("<a  href=javascript:deleteUser(1)>删除</a>"));
			tr.appendTo($("tbody")); 
		});
});


 