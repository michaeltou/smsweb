function change(){  
                $.ajax({    
                    url:"/sms/servlet/CheckSensitiveWordServlet",//servlet文件的名称   
                    type:"POST",  
                    data:{"checkdata":document.getElementById('checkdata').value},
                    success:function(data, textStatus){    
                        document.getElementById('blackwords').innerHTML = data;
                    }  
                });  
                  
            }  