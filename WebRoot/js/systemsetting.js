
$(function(){
	$("#reminderForm").Validform({
    	 ajaxPost:true,
        tiptype:function(msg,o,cssctl){
            if(!o.obj.is("form")){
               var objtip=o.obj.siblings(".Validform_checktip");
				cssctl(objtip,o.type);
				objtip.text(msg);
            }
        },
       
        callback:function(data){
                    setTimeout(function(){
                        //window.location="login.html";
                    }, 1000);
    		},
    });
});