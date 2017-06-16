$(function(){
	$(document).ready(function () { 
			$.ajax({    
		        url:"/sms/servlet/LoaddataServlet",//servlet文件的名称  
		        type:"GET",  
		        success:function(data, textStatus){ 
		        	var strs= new Array();
		        	strs=data.split(",");
                    	$("#todaysentcount").html(strs[1]);
                    	$("#todaysentsuccesscount").html(strs[2]);
                    	$("#todaysentfailcount").html(strs[3]);
                    	$("#todaysentunknowncount").html(strs[4]);
                    	$("#todayrequestfailcount").html(strs[5]);
           		 }  
    		});  
		});
});