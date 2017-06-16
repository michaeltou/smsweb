<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>云模管理后台</title>
<link rel="stylesheet" href="css/admin_bootstrap.css">
<link rel="stylesheet" href="css/admin_reset.css">
<link rel="stylesheet" href="css/admin_style.css">
<link rel="stylesheet" href="css/index_style.css">
<link rel="stylesheet" href="css/jquery-ui.css">
<link rel="stylesheet" href="css/yp_style.css">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2.js"></script>
<script type="text/javascript" src="js/adminindex.js"></script>
<script type="text/javascript" src="js/admin_top.js"></script>

</head>
<body style="background-color: #fff;" onload = "load()">
<div class="admin-notify admin-notify-none">
  <p class="admin-notify-content"> </p>
</div>
<header class="back clearfix">
  <div class="logo"> <a href="javascript:void(0);" onclick="refresh()" class="clearfix"> <span class="logoimg"></span></a></div>
  <div class="click-div1"><span class="click-div1">尊敬的&nbsp;${user.userName }，欢迎您</span><span class="click-div1">[剩余条数:</span><span class="click-div1" id = "surplusCount"></span><span class="click-div1">条]</span><a href="recharge.html" target="in"><span class="click-div1">充值</span></a><a href="javascript:void(0);" onclick="refresh()"><span class="click-div1">刷新</span></a></div>
  <div class="account clearfix">
    <ul class="goFront item clearfix">
      <li> <a href="index.html" target="_blank"> 首页 </a> </li>
      <li> <a href="API.html" target="_blank"> API文档 </a> </li>
      <li> <a href="HelpCenter01.html" target="_blank"> 帮助中心 </a> </li>
      <li> 咨询热线：0571-86571967</li>
    </ul>
  </div>
</header>
</body>
</html>