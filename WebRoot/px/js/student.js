$(function(){
	
		//=============================================
		
		
		$("input[name='sex']").eq(0).attr("checked","checked");
		$("input[name='sex']").eq(0).click();
		
		$("input[name='logonPermission']").eq(1).attr("checked","checked");
		$("input[name='logonPermission']").eq(1).click();
		
		
		$('.AddEmplyee input[type=radio]').button();
		$('.AddEmplyee input[title]').tooltip({
			show:false,
			hide:false,
			position:{
				my:'top left',
				at:'right center'
			}
		});
		
		$('#NewEmployee').click(function(){
			$('.AddEmplyee').dialog("option","title", "新建社员").dialog('open');
		});
		
		$("#imageselect").click(function(){
    			$("input[type='file']").click();
    		});
		
		
		$("body").on('click',".deleteButton", function(){
			
			if(window.confirm('你确定要删除吗？')){
                 		//alert("确定");
                 		DeleteData($(this).get(0));
                		 return true;
	              }else{
	                 //alert("取消");
	                 return false;
	             }
		});

		$("body").on('click',".editButton", function(){
 			EditData($(this).get(0));
 			$('.AddEmplyee').dialog("option","title", "编辑社员").dialog('open');
		});
		
	
		$('.AddEmplyee').dialog({
			autoOpen:false,
			resizable: false,
			modal: true,
			width:1270,
			height:600,
			title:'新建社员',
			buttons:{
			'保存':function(){
				if($("#employeeNameText").val() == ""){
					alert("姓名不能为空。");
					$("#employeeNameText").focus();
					return;
				}else if($("#employeePhoneText").val() == ""){
					alert("手机号码不能为空。");
					$("#employeePhoneText").focus();
					return;
				}else if($("#employeeAgeText").val() == ""){
					alert("年龄不能为空。");
					$("#employeeAgeText").focus();
					return;
				}else if($("#schoolTypeText").children('option:selected').val() == undefined){
					alert("所属校区不能为空。");
					$("#schoolTypeText").focus();
					return;
				}
				//$(this).submit();
				$(this).dialog('close');
				//-----------------------------
				var tr = $("<tr></tr>").attr("bgcolor","#FFFFFF"); 
				tr.append($("<td></td>").html($("#employeeNameText").val())); 
				tr.append($("<td></td>").html($("#employeePhoneText").val())); 
				tr.append($("<td></td>").html($("#schoolTypeText").children('option:selected').val())); 
				tr.append($("<td></td>").html($("input[type='radio'][name='sex']:checked").val())); 
				tr.append($("<td></td>").html($("#employeeAgeText").val())); 
				tr.append($("<td></td>").html($("#logonAcountText").val())); 
				tr.append($("<td></td>").html($("input[type='radio'][name='logonPermission']:checked").val())); 
				tr.append($("<td></td>").html("<input type='button' name='deleteButton' value='删除' class='deleteButton'> <input type='button' name='editButton' value='编辑' class='editButton' >")); 
				tr.appendTo($("tbody")); 
				
				//------------------------------
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
                    	$("#NewEmployee").attr("disabled",false);
                    	$(".MaxSchoolDistrictCount").hide();
                    }else{
                    	$("#NewEmployee").attr("disabled","true");
                    	$(".MaxSchoolDistrictCount").show();
                    }
           		 }  
    		});  
		});
		
		$("#search").click(function(){
			$.ajax({
				type: "POST",
				url: "XXXXXX",
				data: "keyword="+$("#keyword").val(),
				success: function(data){
                        		
                  		}
			});
		});
});

function EditData(editRow){
	var tr = editRow.parentNode.parentNode;
	byId("employeeNameText").value = (tr.cells[0]).innerHTML;
	byId("employeePhoneText").value = (tr.cells[1]).innerHTML;
	var all_options = document.getElementById("schoolTypeText").options;
  	for (i=0; i<all_options.length; i++){
       if (all_options[i].value == (tr.cells[2]).innerHTML)  // 根据option标签的ID来进行断  测试的代码这里是两个等号
       {
         	all_options[i].selected = true;
       }
       
       if(tr.cells[3].innerHTML == "女"){
       	 byId("female").click();
       }else{
      	 byId("male").click();
      }
    }
    byId("employeeAgeText").value = (tr.cells[4]).innerHTML;
}

function DeleteData(delRow){
	var table=delRow.parentNode.parentNode.parentNode;
 	 table.removeChild(delRow.parentNode.parentNode);
}
 
 function byId(id) { 
	return document.getElementById(id); 
} 

function load()    
{    
    var object = byId("schoolTypeText");    
    object.selectedIndex = -1;    
    
    object = byId("employeeMarriedText");    
    object.selectedIndex = -1;  
    
    object = byId("politicalStatusText");    
    object.selectedIndex = -1;  
    
    object = byId("educationText");    
    object.selectedIndex = -1;  
    
    object = byId("laborRelationsText");    
    object.selectedIndex = -1;  
    
    object = byId("personnelStatusText");    
    object.selectedIndex = -1;  
    
    object = byId("laborContractText");    
    object.selectedIndex = -1;  
    
    object = byId("socialSecurityText");    
    object.selectedIndex = -1;  
}    

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
        $("#employeeImage").attr("src",imgURL);
        $("#employeeImageHref").attr("href",imgURL);
        // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
        // URL.revokeObjectURL(imgURL);
    }
};