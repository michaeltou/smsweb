
function load(){  
            $.ajax({    
                url:"/sms/servlet/LoaddataServlet",//servlet文件的名称  
                type:"GET",  
                success:function(data, textStatus){  
                    	var strs= new Array();
		        	strs=data.split(",");
                    	$("#surplusCount").html(strs[0]);
                }  
            });  
        } 